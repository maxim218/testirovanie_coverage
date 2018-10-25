"use strict";

import main from '../main.js';
import assert from 'assert';

describe("Тестирование функции", () => {

	it("Равенство с 100", () => {
		assert.equal(main(100), "aaa");
    });
    
    it("Вхождение в интервал от 100 до 200", () => {
        assert.equal(main(130), "bbb");
        assert.equal(main(180), "bbb");
    });

	it("Большое число", () => {
		assert.equal(main(1500), "ccc");
		assert.equal(main(1700), "ccc");
	});
	
	it("Остальные числа", () => {
		assert.equal(main(800), "eee");
		assert.equal(main(-129), "eee");
	});
});
