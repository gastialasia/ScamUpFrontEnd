import fsPromises from 'fs/promises'
import path from 'path'


function ProfilePage(props) {

    const user = props.user

    return (
        <div>
            <h1>My profile</h1>
            <img src={user.picture}></img>
            <p>{user.name}</p>
            <p>{user.email}</p>
        </div>
    );
}

export default ProfilePage;

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'profile.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData);

    return {
        props: objectData
    }
}