import "./HabitTrack.css";

export default function HabitTrack({ title }) {
  return (
    <>
      <div className="track-habit">
        <h3>{title}</h3>
        <hr />
        <div className="track-week-days">
          <div className="week-day">
            <span>Sun</span>
            <select>
              <option value="None">None</option>
              <option value="Pending">Pending</option>
              <option value="Done">Done</option>
            </select>
          </div>
          <div className="week-day">
            <span>Mon</span>
            <select>
              <option value="None">None</option>
              <option value="Pending">Pending</option>
              <option value="Done">Done</option>
            </select>
          </div>
          <div className="week-day">
            <span>Tue</span>
            <select>
              <option value="None">None</option>
              <option value="Pending">Pending</option>
              <option value="Done">Done</option>
            </select>
          </div>
          <div className="week-day">
            <span>Wed</span>
            <select>
              <option value="None">None</option>
              <option value="Pending">Pending</option>
              <option value="Done">Done</option>
            </select>
          </div>
          <div className="week-day">
            <span>Thu</span>
            <select>
              <option value="None">None</option>
              <option value="Pending">Pending</option>
              <option value="Done">Done</option>
            </select>
          </div>
          <div className="week-day">
            <span>Fri</span>
            <select>
              <option value="None">None</option>
              <option value="Pending">Pending</option>
              <option value="Done">Done</option>
            </select>
          </div>
          <div className="week-day">
            <span>Sat</span>
            <select>
              <option value="None">None</option>
              <option value="Pending">Pending</option>
              <option value="Done">Done</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
