'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('has a starting temp of 20 degrees', function(){
    expect(thermostat.checkTemp()).toEqual(20);
  });

  it('has a minimum temp of 10 degrees', function() {
    for(let i = 0;i <11; i++) {
      thermostat.decreaseTemp();
    }
    expect(thermostat.checkTemp()).toEqual(10);
  });

  describe('change temperature', function (){

    it('can increase the temperature with a button', function(){
      thermostat.increaseTemp();
      expect(thermostat.checkTemp()).toEqual(21);
    });
    it('can decrease the temperature with a button', function(){
      thermostat.decreaseTemp();
      expect(thermostat.checkTemp()).toEqual(19);
    });
  });
});