import React, { useState } from 'react'
import { useDeleteCommentMutation } from '../api/commentApi'

import { useSelector } from "react-redux";
import { selectAuthUser } from "@/features/auth";
import { roles } from "@/shared/config/roles";

export function CommentItem({ comment }) {
  const [isDeleting, setIsDeleting] = useState(false)
  const [deleteComment] = useDeleteCommentMutation()

  const user = useSelector(selectAuthUser);
  const isAdmin = user?.role === roles.admin;
  const isManager = user?.role === roles.manager;
  const isOwner = String(comment.authorId) === String(user?.id);

  const canDelete = isAdmin || isManager || isOwner;


  const handleDelete = async () => {
    setIsDeleting(true)
    try {
      await deleteComment(comment.id).unwrap()
    } catch (e) {
      console.log(e)
    }
  }

  // console.log(comment);
  

  return (
    <div
      style={{
        borderBottom: "1px solid #ddd",
        padding: "5px 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span>
        <b>{comment.authorName}</b>: {comment.text}
        {isDeleting && <span style={{ marginLeft: 8, color: "#888" }}>Видаляється...</span>}
      </span>
      {canDelete && (
        <button onClick={handleDelete} disabled={isDeleting} style={{ marginLeft: 10 }}>
          Видалити
        </button>
      )}
    </div>
  );
}
