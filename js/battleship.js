// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, S, T) {
    let translate = {A:0, B:1, C:2, D:3, E:4, F:5, G:6, H:7, I:8, J:9, K:10, L:11, M:12, N:13, O:14, P:15, Q:16, R:17, S:18, T:19, U:20, V:21, W:22, X:23, Y:24, Z:25};
    let board = [];
    for(let x = 0; x < N; x++){
        board.push([]);
        for(let y = 0; y < N; y++){
            board[x].push('_');
        }
    }

    let ships = S.split(",");
    let shipHits = {};

    for(let x = 0; x < ships.length; x++){
        let ship = ships[x];
        let pos = ship.split(" ");

        for(let y = parseInt(ship[0]) - 1; y <= parseInt(ship[3]) - 1; y++){
            for(let z = translate[ship[1]]; z <= translate[ship[4]]; z++){
                board[y][z] = x;

                if(shipHits[x] === undefined){
                    shipHits[x] = {hits: 1, hit: false};
                } else {
                    shipHits[x]['hits'] += 1;
                }
            }
        }
    }

    let hits = T.split(" ");

    for(let x = 0; x < hits.length; x++){
        let hit = hits[x];
        let y = parseInt(hit[0]) - 1;
        let z = translate[hit[1]];

        if(board[y][z] != "_" && board[y][z] != "x"){

            shipHits[board[y][z]]['hits'] -= 1;
            shipHits[board[y][z]]['hit'] = true;

            board[y][z] = 'x';
        }
    }

    let sunk = 0;
    let hit = 0;

    for(let keys in shipHits){
        if(shipHits[keys]['hits'] === 0){
            sunk += 1;
        } else if(shipHits[keys]['hit'] === true){
            hit += 1;
        }
    }

    return `${sunk},${hit}`;
}

console.log(solution(4, '1B 2C,2D 4D', '2B 2D 3D 4D 4A'));
