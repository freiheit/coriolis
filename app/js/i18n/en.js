angular.module('app').config(['$translateProvider', function($translateProvider) {

  $translateProvider
    .translations('en', {
      am: 'Auto Field-Maintenance Unit',
      bl: 'Beam Laser',
      bh: 'bulkheads',
      ul: 'Burst Laser',
      c: 'Cannon',
      cr: 'Cargo Rack',
      cs: 'Cargo Scanner',
      cc: 'Collector Limpet Controller',
      cm: 'Countermeasure',
      dc: 'Docking Computer',
      fc: 'Fragment Cannon',
      fd: 'Frame Shift Drive',
      ws: 'Frame Shift Wake Scanner',
      fi: 'FSD Interdictor',
      fs: 'Fuel Scoop',
      ft: 'Fuel Tank',
      fx: 'Fuel Transfer Limpet Controller',
      hb: 'Hatch Breaker Limpet Controller',
      hr: 'Hull Reinforcement Package',
      kw: 'Kill Warrant Scanner',
      ls: 'life support',
      nl: 'Mine Launcher',
      ml: 'Mining Laser',
      mr: 'Missile Rack',
      mc: 'Multi-cannon',
      pa: 'Plasma Accelerator',
      pd: 'power distributor',
      pp: 'power plant',
      psg: 'Prismatic Shield Generator',
      pc: 'Prospector Limpet Controller',
      pl: 'Pulse Laser',
      rg: 'Rail Gun',
      rf: 'Refinery',
      sc: 'scanner',
      s: 'sensors',
      sb: 'Shield Booster',
      scb: 'Shield Cell Bank',
      sg: 'Shield Generator',
      T_LOAD: 't-load',
      t: 'thrusters',
      tp: 'Torpedo Pylon',
      PHRASE_NO_BUILDS: 'No builds added to comparison!',
      PHRASE_NO_RETROCH: 'No Retrofitting changes',
      PHRASE_IMPORT: 'Paste JSON or import here',
      PHRASE_SELECT_BUILDS: 'Select Builds to Compare',
      PHRASE_EXPORT_DESC: 'A detailed JSON export of your build for use in other sites and tools',
      PHRASE_CONFIRMATION: 'Are You Sure?',
      PHRASE_UPDATE_RDY: 'Update Available! Click to Refresh',
      PHRASE_BACKUP_DESC: 'Backup of all Coriolis data to save or transfer to another browser/device'
    });
}]);
