exports.up = function (knex) {
    return knex.schema.createTable('students', function (table) {
      table.increments('id').primary();
      table.string('firstName').notNullable();
      table.string('lastName').notNullable();
      table.string('tID').notNullable();
      table.string('uniqueID').notNullable();
      table.timestamps(true, true);
    })
      .then(function () {
        // Insert student data
        return knex('students').insert([
          { firstName: 'Megumin', lastName: 'Sora', tID: 'Sora8825', uniqueID: 'RFWD1E01' },
          { firstName: 'ပုကျိ', lastName: '', tID: 'Hanola15', uniqueID: 'RFWD2C02' },
          { firstName: 'Leandro', lastName: 'Trossard', tID: 'Maddisonthor', uniqueID: 'RFWD3A03' },
          { firstName: 'Dumplin', lastName: '(シカリー)', tID: 'Dumplin03', uniqueID: 'RFWD4B04' },
          { firstName: 'Kyaw', lastName: 'Wanna', tID: 'V3an81', uniqueID: 'RFWD5F05' },
          { firstName: 'Lucas', lastName: '', tID: 'Lilly_Is_My_Fav_Girl', uniqueID: 'RFWD6E06' },
          { firstName: 'Vᴇʀʀɪ ʕʜᴜᴡ5ʔ', lastName: '', tID: 'Verri_123', uniqueID: 'RFWD7D07' },
          { firstName: 'Shwe Bone Htet', lastName: '', tID: 'ManiraBone', uniqueID: 'RFWD8C08' },
          { firstName: 'Phone Pyae Min Khant', lastName: '', tID: 'minkhant001', uniqueID: 'RFWD9B09' },
          { firstName: 'Bianca', lastName: '', tID: 'Biancanoe', uniqueID: 'RFWDA0A10' },
          { firstName: 'July', lastName: '', tID: 'EaintJulyMoe', uniqueID: 'RFWDB0B11' },
          { firstName: 'Soe', lastName: 'Thiha Swe', tID: 'Nicehtc785', uniqueID: 'RFWDC0C12' },
          { firstName: 'Ichi', lastName: '', tID: 'ichi59', uniqueID: 'RFWDD0D13' },
          { firstName: 'khin khin', lastName: '', tID: 'Country592020', uniqueID: 'RFWDE0E14' },
          { firstName: 'Stella May Than', lastName: 'Zin', tID: '', uniqueID: 'RFWDF0F15' },
          { firstName: 'Thi Ha', lastName: 'Kyaw', tID: 'Thihakyaw01', uniqueID: 'RFWDG10' },
          { firstName: 'Khant Boune', lastName: 'Pai', tID: 'stealmaskgmail', uniqueID: 'RFWDH11' },
          { firstName: 'Myat noe', lastName: '', tID: 'M_Y_A_T90', uniqueID: 'RFWDI12' },
          { firstName: 'Mg Wyne Pyae', lastName: 'Win', tID: 'wynepyaewin', uniqueID: 'RFWDJ13' },
          { firstName: 'Khin Thandar', lastName: 'Soe', tID: 'r_o_s_i_e_s', uniqueID: 'RFWDK14' },
          { firstName: 'Emilia', lastName: '', tID: 'TheOlivia', uniqueID: 'RFWDL15' },
          { firstName: 'Adelynn', lastName: '', tID: '', uniqueID: 'RFWDM16' },
          { firstName: 'Duan', lastName: 'Su Su', tID: 'gg_su', uniqueID: 'RFWDN17' },
          { firstName: '..', lastName: '', tID: 'Nyi_Hteth', uniqueID: 'RFWDO18' },
          { firstName: 'Theint Ei', lastName: 'Mon', tID: '', uniqueID: 'RFWDP19' },
          { firstName: '美珍', lastName: '', tID: 'Patteria', uniqueID: 'RFWDQ1A' },
          { firstName: 'Aram', lastName: '', tID: 'Kyoongphile', uniqueID: 'RFWDR1B' },
          { firstName: 'Promi', lastName: '{MHGR}', tID: 'Programmer_K_dev', uniqueID: 'RFWDS1C' },
          { firstName: 'Khinn Yati', lastName: 'Kyaw', tID: 'KhinnYati', uniqueID: 'RFWDT1D' },
          { firstName: 'Myo Set', lastName: 'Paing', tID: 'Kreport4', uniqueID: 'RFWDU1E' },
          { firstName: 'Yu', lastName: 'Hlaing', tID: '', uniqueID: 'RFWDV1F' },
          { firstName: 'Bhone Myint', lastName: 'Kyaw', tID: 'BhoneMyintKyaw247', uniqueID: 'RFWDW20' },
          { firstName: 'G11 NME E1 021', lastName: '(I2X7002 RN.7, I2X7004 RN-46)', tID: '', uniqueID: 'RFWDX21' },
          { firstName: 'Aeonca', lastName: '', tID: 'Aeonca', uniqueID: 'RFWDY22' },
          { firstName: 'Hera♪ヽ(^○^)ノ9 27', lastName: '-', tID: 'Hera03', uniqueID: 'RFWDZ23' },
          { firstName: 'Oake Min', lastName: 'Khant', tID: 'MrBarrel116', uniqueID: 'RFWD124' }
        ]);
      });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('students');
  };
  