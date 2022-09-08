const Teams = ({ selectedTeam, handleTeamSelectionChange }) => {

  return (
      <div className="row justify-content-center mt-3 mb-3 ">
        <div className="col-6">
          <select className="form-select from-select-lg" value={selectedTeam} onChange={handleTeamSelectionChange}>
            <option value="TeamA">TeamA</option>
            <option value="TeamB">TeamB</option>
            <option value="TeamC">TeamC</option>
            <option value="TeamD">TeamD</option>
          </select>
        </div>
      </div>
         
  )
}
export default Teams