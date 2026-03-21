function TeamMember ({name, role, year, bio}) {
    return (
    <div className='card'>
        <h1>{name}</h1>
        <p>{year} {role}</p>
        <p>{bio}</p>
    </div>
    );
}
export default TeamMember;