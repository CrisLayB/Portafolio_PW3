import './ShootingStars.css'

export const ShootingStars = () => {
  return (
    <div className="shooting-stars">
      {[...Array(6)].map((_, i) => (
        <div key={i} className={`star star-${i + 1}`}></div>
      ))}
    </div>
  )
}
