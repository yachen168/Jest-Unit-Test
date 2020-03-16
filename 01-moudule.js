function isPlayMovie(inputNumber) {
    if (Number(inputNumber)) {
        console.log("照常播放電影");
        return true;
    } else {
        console.log("不播放電影");
        return false;
    }
} //function


module.exports = isPlayMovie;