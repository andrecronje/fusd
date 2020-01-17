const {
    BN
} = require('openzeppelin-test-helpers');
const { expect } = require('chai');

const FUsd = artifacts.require('FUsd');

contract('test fusd', async () => {
    it('checking get name', async () => {
        this.fusd = await FUsd.new("FUSD","FUSD",18);
        expect(await this.fusd.name.call()).equal('FUSD');
    });
});
