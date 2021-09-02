function deleteMonster(monsterId) {
    console.log(monsterId)

    const deleteMonsterUrl = `http://localhost:4000/my-monsters/delete/${monsterId}`;
    const accessToken = localStorage.getItem('SessionToken')

    fetch(deleteMonsterUrl, {
        method: 'DELETE',
        headers: new Headers ({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        displayMine();
    })
    .catch(err => console.log(err))
}