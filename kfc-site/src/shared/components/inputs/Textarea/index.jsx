const Textarea = ({ error, ...rest }) => {
  return (
    <>
      <textarea {...rest} rows={4}/>
      {error && (
        <p className='defaultForm__errorYup'>
          {error}
        </p>
      )}
    </>
  )
}

export default Textarea
