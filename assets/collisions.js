const collisions = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 2049, 2049, 2049, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 2049, 0, 0, 2049, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 2049, 0, 2049, 0, 0, 2049, 0, 0, 0, 0, 0, 2049, 2049, 0, 0, 0, 0, 0, 0, 0, 0, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 0, 2049, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 2049, 0, 2049, 2049, 0, 0, 2049, 0, 0, 0, 2049, 2049, 0, 0, 2049, 0, 0, 0, 0, 0, 0, 0, 2049, 0, 0, 0, 0, 0, 0, 2049, 2049, 2049, 2049, 2049, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2049, 2049, 2049, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 2049, 0, 0, 2049, 2049, 0, 0, 2049, 0, 0, 2049, 0, 0, 0, 0, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 0, 0, 0, 0, 0, 0, 2049, 2049, 0, 0, 2049, 0, 0, 0, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 0, 0, 2049, 2049, 0, 0, 2049, 2049, 2049, 2049, 2049, 2049, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 2049, 0, 0, 2049, 2049, 0, 0, 2049, 0, 0, 2049, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2049, 2049, 0, 0, 0, 0, 0, 0, 2049, 0, 0, 0, 2049, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2049, 2049, 0, 0, 2049, 2049, 0, 0, 0, 0, 0, 2049, 2049, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 2049, 0, 0, 0, 0, 0, 0, 2049, 2049, 2049, 2049, 2049, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2049, 2049, 0, 0, 0, 0, 0, 0, 2049, 0, 0, 0, 2049, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2049, 2049, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2049, 0, 0, 0, 0, 0,
    0, 0, 0, 2049, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 0, 0, 2049, 0, 0, 2049, 0, 0, 0, 2049, 2049, 2049, 2049, 2049, 0, 0, 2049, 2049, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2049, 0, 0, 0, 0, 0,
    0, 0, 0, 2049, 0, 0, 2049, 2049, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2049, 2049, 0, 0, 0, 0, 0, 0, 2049, 2049, 0, 0, 0, 0, 0, 0, 2049, 2049, 0, 0, 2049, 0, 0, 2049, 0, 0, 0, 0, 0, 0, 2049, 2049, 0, 0, 2049, 2049, 0, 0, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 0, 0, 2049, 0, 0, 0, 0, 0,
    0, 0, 0, 2049, 0, 0, 2049, 2049, 2049, 2049, 0, 0, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 0, 0, 0, 0, 0, 0, 2049, 2049, 0, 0, 0, 0, 0, 0, 2049, 2049, 0, 0, 2049, 0, 0, 0, 2049, 0, 0, 0, 0, 0, 2049, 2049, 0, 0, 2049, 2049, 0, 0, 2049, 0, 0, 0, 0, 2049, 0, 0, 0, 2049, 0, 0, 0, 0, 0,
    0, 0, 0, 2049, 0, 0, 2049, 2049, 0, 0, 0, 0, 2049, 2049, 0, 0, 0, 2049, 2049, 0, 0, 0, 0, 0, 0, 2049, 2049, 0, 0, 2049, 2049, 0, 0, 2049, 2049, 0, 0, 2049, 0, 0, 0, 2049, 0, 0, 0, 0, 0, 2049, 2049, 0, 0, 0, 0, 0, 0, 2049, 0, 0, 0, 0, 2049, 0, 0, 0, 2049, 0, 0, 0, 0, 0,
    0, 0, 0, 2049, 0, 0, 2049, 2049, 0, 0, 0, 0, 2049, 2049, 0, 0, 0, 2049, 2049, 0, 0, 2049, 2049, 0, 0, 2049, 2049, 0, 0, 2049, 2049, 0, 0, 2049, 2049, 0, 0, 2049, 0, 0, 0, 2049, 0, 0, 0, 0, 0, 2049, 2049, 0, 0, 0, 0, 0, 0, 2049, 0, 0, 0, 0, 2049, 0, 0, 0, 2049, 0, 0, 0, 0, 0,
    0, 0, 0, 2049, 0, 0, 2049, 2049, 0, 0, 2049, 2049, 2049, 2049, 0, 0, 0, 2049, 2049, 0, 0, 2049, 2049, 0, 0, 2049, 2049, 0, 0, 2049, 2049, 0, 0, 2049, 2049, 0, 0, 2049, 0, 0, 0, 0, 2049, 2049, 2049, 0, 0, 2049, 2049, 2049, 0, 0, 2049, 2049, 2049, 2049, 0, 0, 0, 0, 2049, 0, 0, 0, 2049, 0, 0, 0, 0, 0,
    0, 0, 0, 2049, 0, 0, 2049, 2049, 0, 0, 0, 0, 2049, 2049, 0, 0, 0, 2049, 2049, 0, 0, 2049, 2049, 0, 0, 2049, 2049, 0, 0, 2049, 2049, 0, 0, 2049, 2049, 0, 0, 2049, 0, 0, 0, 0, 0, 0, 2049, 0, 0, 2049, 2049, 0, 2049, 2049, 0, 0, 0, 2049, 2049, 2049, 0, 2049, 2049, 0, 0, 2049, 2049, 2049, 0, 0, 0, 0,
    0, 0, 0, 2049, 0, 0, 2049, 2049, 0, 0, 0, 0, 2049, 2049, 0, 0, 0, 2049, 2049, 0, 0, 2049, 2049, 0, 0, 0, 0, 0, 0, 2049, 2049, 0, 0, 2049, 2049, 0, 0, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 0, 0, 2049, 2049, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2049, 0, 2049, 0, 0, 0, 0, 2049, 0, 0, 0, 0,
    0, 0, 0, 2049, 0, 0, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 0, 0, 2049, 2049, 0, 0, 0, 2049, 2049, 0, 0, 0, 0, 0, 0, 2049, 2049, 0, 0, 2049, 2049, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 0, 0, 0, 0, 2049, 0, 0, 0, 0,
    0, 0, 0, 2049, 0, 0, 2049, 2049, 0, 0, 0, 0, 0, 0, 0, 0, 2049, 2049, 0, 0, 0, 2049, 2049, 2049, 2049, 0, 0, 0, 0, 2049, 2049, 0, 0, 2049, 2049, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2049, 2049, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2049, 0, 0, 0, 0,
    0, 0, 0, 2049, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2049, 2049, 0, 0, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 0, 0, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2049, 0, 0, 0, 0,
    0, 0, 0, 2049, 0, 0, 0, 0, 0, 0, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 0, 0, 2049, 0, 0, 2049, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2049, 2049, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2049, 2049, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2049, 0, 0, 0, 0,
    0, 0, 0, 0, 2049, 0, 0, 0, 0, 0, 2049, 2049, 0, 0, 0, 0, 0, 0, 0, 0, 2049, 0, 0, 2049, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2049, 2049, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2049, 2049, 0, 0, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 0, 0, 0, 0, 0,
    0, 0, 0, 2049, 2049, 0, 0, 0, 0, 0, 2049, 2049, 0, 0, 0, 0, 0, 0, 0, 0, 2049, 0, 0, 2049, 0, 0, 0, 0, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 0, 0, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 0, 0, 2049, 2049, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2049, 0, 0, 0, 0, 0, 0,
    0, 0, 2049, 0, 0, 0, 0, 0, 0, 0, 2049, 2049, 0, 0, 0, 0, 0, 0, 0, 2049, 2049, 2049, 2049, 2049, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2049, 2049, 0, 0, 2049, 2049, 0, 0, 0, 0, 0, 0, 2049, 2049, 0, 0, 2049, 2049, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2049, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 2049, 0, 0, 0, 0, 0, 0, 0, 2049, 2049, 0, 0, 2049, 2049, 2049, 2049, 2049, 2049, 0, 0, 0, 0, 2049, 2049, 0, 0, 0, 0, 0, 0, 0, 2049, 2049, 0, 0, 2049, 2049, 0, 0, 0, 0, 0, 0, 2049, 2049, 0, 0, 2049, 2049, 2049, 2049, 2049, 2049, 0, 0, 2049, 2049, 0, 0, 2049, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 2049, 0, 0, 2049, 2049, 0, 0, 2049, 2049, 0, 0, 2049, 0, 0, 0, 0, 2049, 0, 0, 0, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 0, 0, 2049, 2049, 0, 0, 2049, 2049, 0, 0, 2049, 2049, 0, 0, 2049, 2049, 0, 0, 0, 0, 0, 0, 2049, 2049, 0, 0, 2049, 2049, 2049, 2049, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 2049, 0, 0, 2049, 2049, 0, 0, 2049, 2049, 0, 0, 2049, 0, 0, 0, 0, 2049, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2049, 2049, 0, 0, 2049, 2049, 0, 0, 2049, 2049, 0, 0, 2049, 2049, 0, 0, 0, 0, 0, 0, 2049, 2049, 0, 0, 2049, 2049, 2049, 2049, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 2049, 0, 0, 2049, 2049, 0, 0, 2049, 2049, 0, 0, 2049, 0, 0, 0, 0, 2049, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2049, 2049, 0, 0, 2049, 2049, 0, 0, 2049, 2049, 0, 0, 2049, 2049, 2049, 2049, 2049, 2049, 0, 0, 2049, 2049, 0, 0, 0, 0, 0, 2049, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 2049, 0, 0, 2049, 2049, 0, 0, 2049, 2049, 0, 0, 2049, 2049, 2049, 2049, 0, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 0, 0, 0, 2049, 2049, 2049, 2049, 2049, 0, 0, 0, 2049, 2049, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2049, 2049, 0, 0, 0, 0, 0, 2049, 2049, 2049, 2049, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 2049, 0, 0, 2049, 2049, 2049, 2049, 2049, 2049, 0, 0, 0, 0, 0, 0, 2049, 2049, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2049, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2049, 2049, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2049, 2049, 0, 0, 0, 0, 0, 0, 0, 0, 2049, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 2049, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2049, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2049, 2049, 0, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 0, 0, 0, 0, 0, 0, 0, 0, 2049, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 2049, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2049, 0, 0, 0, 0, 0, 0, 0, 2049, 2049, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2049, 2049, 0, 0, 0, 0, 0, 2049, 2049, 2049, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 2049, 0, 0, 2049, 2049, 2049, 0, 0, 0, 0, 0, 0, 0, 2049, 2049, 2049, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2049, 2049, 0, 2049, 2049, 2049, 0, 2049, 2049, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2049, 2049, 2049, 2049, 2049, 2049, 2049, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 2049, 2049, 2049, 0, 0, 0, 2049, 2049, 2049, 0, 2049, 2049, 2049, 0, 0, 0, 2049, 2049, 2049, 0, 2049, 2049, 0, 2049, 2049, 2049, 0, 0, 2049, 0, 0, 0, 2049, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2049, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2049, 0, 0, 2049, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]