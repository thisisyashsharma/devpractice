
const getUser = (id)=>{
    const names = ["a", "b", "c"];
    let name = names[id];

    return { id, name };
}

module.exports = {getUser}
