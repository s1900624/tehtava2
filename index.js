window.onload = function() {
    const runnerImgs = ['runner1.png', 'runner2.png', 'runner3.png', 'runner4.png'];

    const runnerImageId = document.getElementById('runner-image');
    const buttonStop = document.getElementById('stop');

    let count = 0;
    let runnerId = 0;
    const runner = () => {
        runnerId = setTimeout( () => {
            runnerImageId.src = `./imgs/${runnerImgs[count]}`;
            count = count < 3 ? count += 1 : 0;
            runner();
        }, 60);
    }

    runner();
    buttonStop.onclick = () => clearTimeout(runnerId);
};