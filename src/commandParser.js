function parseCommand(robot, table, command) {
    const parts = command.split(' ');
    const cmd = parts[0];

    switch (cmd) {
        case 'PLACE':
            const [x, y, facing] = parts[1].split(',');
            if (table.isValidPosition(parseInt(x), parseInt(y))) {
                robot.place(parseInt(x), parseInt(y), facing);
            }
            break;
        case 'MOVE':
            const newX = robot.x;
            const newY = robot.y;
            robot.move();
            if (!table.isValidPosition(robot.x, robot.y)) {
                robot.x = newX;
                robot.y = newY;
            }
            break;
        case 'LEFT':
        case 'RIGHT':
            robot.rotate(cmd);
            break;
        case 'REPORT':
            console.log(robot.report());
            break;
    }
}

module.exports = parseCommand
