const DatePicker = ({error, ...rest }) => {
  return (
    <>
      <input type="date" {...rest}/>
      {error && (
        <p className='defaultForm__errorYup'>
          {error}
        </p>
      )}
    </>
  )
}

export default DatePicker
