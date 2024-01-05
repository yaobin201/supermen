import './AniBubbles.scss';
export default function AniBubbles() {
  return <div className="g-container">
    <div className="g-wrap">
      <div className="g-footer">
        {
          [...Array(500)].map((_, index) => {
            return <div className="g-bubble" key={index}></div>
          })
        }
      </div>
    </div>
  </div>  
}
