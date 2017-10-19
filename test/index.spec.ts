import { expect } from 'chai';
import index from '../src/index';


describe('Index', () => {
    it('should not be null', () => expect(index).to.be.not.null);
    it('should have a Game property', () => expect(index).to.haveOwnProperty('Game'));
    it('should have a Point property', () => expect(index).to.haveOwnProperty('Point'));
    it('should have a Turtle property', () => expect(index).to.haveOwnProperty('Turtle'));
    it('should have a Mine property', () => expect(index).to.haveOwnProperty('Mine'));
    it('should have a Settings property', () => expect(index).to.haveOwnProperty('Settings'));
});