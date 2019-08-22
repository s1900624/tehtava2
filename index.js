window.onload = function() {
    const runnerImgs = ['runner1.png', 'runner2.png', 'runner3.png', 'runner4.png'];

    const runnerImageId = document.getElementById('runner-image');

    let count = 0;
    const runner = () => {
        setTimeout( () => {
            runnerImageId.src = `./imgs/${runnerImgs[count]}`;
            count = count < 4 ? count += 1 : 0;
            runner();
        }, 60);
    }
    runner();
};