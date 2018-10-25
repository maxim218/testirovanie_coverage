"use strict";

export default function main(x) {
    if(x === 100) {
        return "aaa";
    }

    if(100 < x && x < 200) {
        return "bbb";
    }

    if(x > 999) {
        return "ccc";
    }

    return "eee";
}
