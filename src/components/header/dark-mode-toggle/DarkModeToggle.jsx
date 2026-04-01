import "./DarkModeToggle.css"

function DarkModeToggle({ isDark, onToggle }) {
  return (
    <label className="theme-switch">
      <input 
        type="checkbox" 
        checked={isDark} 
        onChange={onToggle} 
      />
      <div className="slider round">
        <span className="icon">{isDark ? '🌙' : '☀️'}</span>
      </div>
    </label>
  )
}
export default DarkModeToggle;