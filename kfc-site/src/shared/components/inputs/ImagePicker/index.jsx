import { useState } from 'react'

const ImagePicker = ({ name, onChange, initialImage = '' }) => {
  const [preview, setPreview] = useState(initialImage)
  const [isHovered, setIsHovered] = useState(false)

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result)
        onChange(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const hasImage = !!preview

  return (
    <div>
      <input
        type="file"
        name={name}
        accept="image/png, image/jpeg"
        onChange={handleFileChange}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      {hasImage ? (
        <img
          src={preview}
          alt="User avatar"
        />
      ) : (
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
            />
          </svg>
        </div>
      )}
      {hasImage && isHovered && (
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>
        </div>
      )}
    </div>
  )
}

export default ImagePicker
