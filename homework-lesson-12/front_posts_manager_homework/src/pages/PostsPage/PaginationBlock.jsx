function PaginationBlock({ page, totalPagesNumber, onPageSelect }) {
  const goPrev = () => {
    onPageSelect(page - 1)
  }
  const goNext = () => {
    onPageSelect(page + 1)
  }
  return (
    <div>
      {!!totalPagesNumber && (
        <>
          <button onClick={goPrev} disabled={page === 1}>
            Попредня
          </button>
          {Array.from({ length: totalPagesNumber }).map((_, num) => (
            <button
              key={num}
              onClick={() => onPageSelect(num + 1)}
              style={{
                border: num + 1 === page ? '2px solid red' : '',
              }}
            >
              {num + 1}
            </button>
          ))}
          <button onClick={goNext} disabled={page == totalPagesNumber}>
            Наступна
          </button>
        </>
      )}
    </div>
  )
}

export default PaginationBlock
