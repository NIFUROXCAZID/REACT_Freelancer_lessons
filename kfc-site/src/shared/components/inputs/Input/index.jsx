const Input = ({error, hint, ...rest }) => {
  return (
    <>
      <input {...rest}/>
      {hint && !error && (
        <div>
          {hint}
        </div>
      )}
      {error && (
        <p className='defaultForm__errorYup'>
          {error}
        </p>
      )}
    </>
  )
}

export default Input
