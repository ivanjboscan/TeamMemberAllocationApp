import Teams from './Teams';
import TeamMembers from './TeamMembers';

const Employees = ({ selectedTeam, employees, handleTeamSelectionChange, handleEmployeeCardClick }) => {

   return (
    <main className="container">
      <Teams selectedTeam={selectedTeam} handleTeamSelectionChange={handleTeamSelectionChange} />

      <div className="row justify-content-center mt-3 mb-3 ">
        <div className="col-6">
          <div className="card-collection">
              <TeamMembers employees={employees} handleEmployeeCardClick={handleEmployeeCardClick} selectedTeam={selectedTeam} />
          </div>
        </div>
      </div>
    </main>
  )
}
export default Employees