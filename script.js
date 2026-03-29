window.onload = function () {

    const puzzle = document.getElementById("puzzle");
    const size = 3;

    let order = [...Array(size * size).keys()].sort(() => Math.random() - 0.5);
    let selected = null;

    function createPuzzle() {
        puzzle.innerHTML = "";

        order.forEach((val, index) => {
            const div = document.createElement("div");
            div.className = "piece";

            div.style.backgroundImage = "url('AA.jpeg')";
            div.style.backgroundSize = "360px 360px";
            div.style.backgroundColor = "red"; // keeps red if image fails

            const x = val % size;
            const y = Math.floor(val / size);

            div.style.backgroundPosition = `${-x * 120}px ${-y * 120}px`;

            div.onclick = () => selectPiece(index, div);

            puzzle.appendChild(div);
        });
    }

    function selectPiece(index, el) {
        if (selected === null) {
            selected = index;
            el.classList.add("selected");
        } else {
            [order[selected], order[index]] = [order[index], order[selected]];
            selected = null;
            createPuzzle();
            checkWin();
        }
    }

    function checkWin() {
        document.getElementById("nextBtn").style.display = "block";
    }

    function goNext() {
        window.location.href = "final.html";
    }

    createPuzzle();

}