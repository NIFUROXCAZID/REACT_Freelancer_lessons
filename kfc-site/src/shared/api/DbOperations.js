import db from '@/shared/config/firebase-config'
import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  updateDoc,
  query,
  orderBy,
  limit,
  startAfter,
  setDoc,
  writeBatch,
  increment,
  where,
} from 'firebase/firestore'

class DbOperations {
  constructor(name) {
    this.collectionRef = collection(db, name)
  }
  // --- REACTIONS METHODS --- (Лайк Дизлайк)
  async setReaction({ productId, userId, type }) {
    const reactionId = `${productId}_${userId}`

    const reactionRef = doc(db, "reactions", reactionId)
    const productRef = doc(db, this.collectionRef.path, productId)

    const existing = await getDoc(reactionRef)

    const batch = writeBatch(db)

    if (!existing.exists()) {
      // ➜ перша реакція
      batch.set(reactionRef, {
        productId,
        userId,
        type,
      })

      batch.update(productRef, {
        [`${type}sCount`]: increment(1),
      })
    } else {
      const oldType = existing.data().type

      // ➜ toggle off
      if (oldType === type) {
        batch.delete(reactionRef)

        batch.update(productRef, {
          [`${type}sCount`]: increment(-1),
        })
      } else {
        // ➜ switch like <-> dislike
        batch.update(reactionRef, { type })

        batch.update(productRef, {
          likesCount: increment(type === "like" ? 1 : -1),
          dislikesCount: increment(type === "dislike" ? 1 : -1),
        })
      }
    }

    await batch.commit()
  }
    async getUserReaction(productId, userId) {
    const reactionId = `${productId}_${userId}`
    const ref = doc(db, "reactions", reactionId)

    const snap = await getDoc(ref)
    return snap.exists() ? snap.data() : null
  }
  // --- FAVORITES METHODS --- (Додавання в улюблене)
  async toggleFavorite({ productId, userId }) {
    const id = `${productId}_${userId}`
    const ref = doc(db, "favorites", id)

    const existing = await getDoc(ref)

    if (existing.exists()) {
      await deleteDoc(ref) // remove
      } else {
        await setDoc(ref, { productId, userId }) // add
      }
    }

    async getUserFavorites(userId) {
      const q = query(
        collection(db, "favorites"),
        where("userId", "==", userId)
      )
    const snap = await getDocs(q)
    return snap.docs.map((d) => d.data().productId)
    }
  // CONTACTS US METHOD
  async sendContactMessage({ email, message }) {
    const ref = collection(db, "contacts")

    await addDoc(ref, {
      email,
      message,
      createdAt: new Date(),
    })
  }
  // --- CARTS SPECIALIZED METHODS ---
  // get cart object for user_id
  async getCartByUserId(userId) {
    const snap = await getDoc(doc(this.collectionRef, userId))
    if (!snap.exists()) return {}
    return snap.data() // { product_id: { ... } }
  }

  // set full cart object for user_id
  async setCartByUserId(userId, cartObj) {
    await setDoc(doc(this.collectionRef, userId), cartObj)
    return true
  }

  // update/add one product in cart for user_id
  async updateCartProduct(userId, productId, productData) {
    await updateDoc(doc(this.collectionRef, userId), {
      [productId]: productData,
    })
    return true
  }

  // remove one product from cart for user_id
  async removeCartProduct(userId, productId) {
    // Видалення: оновлюємо поле на null (старий робочий варіант)
    await updateDoc(doc(this.collectionRef, userId), {
      [productId]: null,
    })
    return true
  }

  async getAll() {
    const snapshot = await getDocs(this.collectionRef)
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  }

  async getAllPaginated({ page = 1, perPage = 6, cursors = [] }) {
    let q

    const realLimit = perPage + 1 // беремо на 1 більше

    if (page === 1) {
      q = query(this.collectionRef, orderBy('title'), limit(realLimit))
    } else {
      const cursor = cursors[page - 2]
      if (!cursor) throw new Error('Cursor not found')
      q = query(
        this.collectionRef,
        orderBy('title'),
        startAfter(cursor),
        limit(realLimit),
      )
    }

    const snapshot = await getDocs(q)
    const docs = snapshot.docs

    const hasMore = docs.length > perPage

    const data = docs
      .slice(0, perPage)
      .map((doc) => ({ id: doc.id, ...doc.data() }))
    const lastVisible = docs[docs.length - 2] || null

    return { data, cursor: lastVisible, hasMore }
  }

  async getById(id) {
    const snap = await getDoc(doc(this.collectionRef, id))
    return { id: snap.id, ...snap.data() }
  }

  async setWithId(id, data) {
    await setDoc(doc(this.collectionRef, id), data)
    return true
  }

  async add(data) {
    await addDoc(this.collectionRef, data)
    return true
  }
  async addUser(uid, data) {
    const user = {
      ...data,
      uid,
      createdAt: new Date().toISOString(),
    }
    await setDoc(doc(this.collectionRef, uid), user)
    return user
  }
  async update(id, data) {
    await updateDoc(doc(this.collectionRef, id), data)
    return true
  }
  async delete(id) {
    await deleteDoc(doc(this.collectionRef, id))
    return true
  }
}

export default DbOperations
