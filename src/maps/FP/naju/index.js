const {
  di: {
    dcmConfigModel: {
      nodeDataType: { BLOCK, TROUBLE, NONE },
    },
  },
} = require('../../../module');

/**
 * @type {mDeviceMap}
 */
const map = {
  drawInfo: {
    frame: {
      mapSize: {
        width: 880,
        height: 1230,
      },
      svgModelResourceList: [
        {
          id: 'salternBlock_001',
          type: 'rect',
          elementDrawInfo: {
            width: 100,
            height: 150,
            color: '#33ffff',
          },
        },
        {
          id: 'salternBlock_002',
          type: 'rect',
          elementDrawInfo: {
            width: 100,
            height: 150,
            color: '#33ffff',
          },
        },
        {
          id: 'salternLine_001',
          type: 'line',
          elementDrawInfo: {
            strokeWidth: 100,
            color: '#33ccff',
          },
        },
        {
          id: 'pump_001',
          type: 'circle',
          elementDrawInfo: {
            radius: 20,
            color: '#9fe667',
          },
        },
        {
          id: 'valve_001',
          type: 'rhombus',
          elementDrawInfo: {
            width: 20,
            height: 20,
            rotate: 45,
            color: '#efb4ce',
          },
        },
      ],
    },
    positionInfo: {},
  },
  setInfo: {
    mainInfo: {
      uuid: '001',
    },
    dccConstructorList: [
      {
        dccId: 'DCC_001',
        connect_info: {
          type: 'socket',
          subType: '',
          host: 'localhost',
          port: 9000,
          hasPassive: true,
        },
      },
    ],
    dpcConstructorList: [
      {
        dpcId: 'DPC_001',
        protocol_info: {
          mainCategory: 'FarmParallel',
          subCategory: 'dmTech',
          wrapperCategory: 'default',
          cmdExecTimeoutMs: 1000 * 2,
        },
      },
      {
        dpcId: 'DPC_IVT_001',
        protocol_info: {
          mainCategory: 'Inverter',
          subCategory: 'das_1.3',
          wrapperCategory: 'default',
          cmdExecTimeoutMs: 1000 * 6,
        },
      },
      {
        dpcId: 'DPC_IVT_002',
        protocol_info: {
          mainCategory: 'Inverter',
          subCategory: 's5500k',
          wrapperCategory: 'default',
          cmdExecTimeoutMs: 1000 * 10,
        },
      },
    ],
    repeatNodeList: [
      {
        repeatId: 'RE_NODE_IVT',
        repeatCategory: 'node',
        nodeList: [
          {
            target_code: '001',
            target_name: '?????? ????????? A (33kW ???)',
          },
          {
            target_code: '002',
            target_name: '?????? ????????? B (33kW ???)',
          },
          {
            target_code: '003',
            target_name: '?????? ????????? C (33kW ???)',
          },
        ],
      },
      {
        repeatId: 'RE_PREFIX_IVT',
        repeatCategory: 'prefix',
        nodeList: [
          'IVT_PV_V',
          'IVT_PV_A',
          'IVT_PV_KW',
          'IVT_G_RS_V',
          'IVT_G_ST_V',
          'IVT_G_TR_V',
          'IVT_G_R_A',
          'IVT_G_S_A',
          'IVT_G_T_A',
          'IVT_G_L_F',
          'IVT_PW_PV_KW',
          'IVT_PW_G_KW',
          'IVT_PW_C_KWH',
          'IVT_TRB',
        ],
      },
    ],
    dataLoggerStructureList: [
      {
        target_prefix: 'D_CE',
        target_name: 'Crops Environment (?????? ?????? ??????)',
        dataLoggerDeviceList: [
          {
            serial_number: 1,
            target_code: '001',
            target_name: '?????? ????????? A-1',
            dccId: 'DCC_001',
            dpcId: 'DPC_001',
            nodeList: [
              'LX_001',
              'S_I_001',
              'CO2_001',
              'WV_S_001',
              'T_PR_001',
              'T_S_001',
              'RH_S_001',
            ],
          },
          // FIXME:
          {
            serial_number: 31,
            target_code: '031',
            target_name: '?????? ????????? A-2',
            dccId: 'DCC_001',
            dpcId: 'DPC_001',
            nodeList: ['S_PU_031', 'S_PU_032'],
          },
          {
            serial_number: 2,
            target_code: '002',
            target_name: '?????? ????????? B-1',
            dccId: 'DCC_001',
            dpcId: 'DPC_001',
            nodeList: [
              'LX_002',
              'S_PU_002',
              'CO2_002',
              'WV_S_002',
              'T_S_002',
              'RH_S_002',
            ],
          },
          // FIXME:
          {
            serial_number: 32,
            target_code: '032',
            target_name: '?????? ????????? B-2',
            dccId: 'DCC_001',
            dpcId: 'DPC_001',
            nodeList: ['S_PU_033', 'S_PU_034', 'S_PU_035', 'S_PU_036'],
          },
          {
            serial_number: 3,
            target_code: '003',
            target_name: '?????? ????????? C-1',
            dccId: 'DCC_001',
            dpcId: 'DPC_001',
            nodeList: ['LX_003', 'CO2_003', 'WV_S_003', 'T_S_003', 'RH_S_003'],
          },
          // FIXME:
          {
            serial_number: 33,
            target_code: '033',
            target_name: '?????? ????????? C-2',
            dccId: 'DCC_001',
            dpcId: 'DPC_001',
            nodeList: ['S_PU_037', 'S_PU_038'],
          },
          {
            serial_number: 4,
            target_code: '004',
            target_name: '?????? ????????? A-1',
            dccId: 'DCC_001',
            dpcId: 'DPC_001',
            nodeList: [
              'LX_004',
              'S_I_004',
              'CO2_004',
              'WV_S_004',
              'T_PR_004',
              'T_S_004',
              'RH_S_004',
            ],
          },
          // FIXME:
          {
            serial_number: 34,
            target_code: '034',
            target_name: '?????? ????????? A-2',
            dccId: 'DCC_001',
            dpcId: 'DPC_001',
            nodeList: ['S_PU_039', 'S_PU_040'],
          },
          {
            serial_number: 5,
            target_code: '005',
            target_name: '?????? ????????? B-1',
            dccId: 'DCC_001',
            dpcId: 'DPC_001',
            nodeList: [
              'LX_005',
              'S_PU_005',
              'CO2_005',
              'WV_S_005',
              'T_S_005',
              'RH_S_005',
            ],
          },
          {
            serial_number: 35,
            target_code: '035',
            target_name: '?????? ????????? B-2',
            dccId: 'DCC_001',
            dpcId: 'DPC_001',
            nodeList: ['S_PU_041', 'S_PU_042', 'S_PU_043', 'S_PU_044'], // FIXME:
          },
          {
            serial_number: 6,
            target_code: '006',
            target_name: '?????? ????????? C-1',
            dccId: 'DCC_001',
            dpcId: 'DPC_001',
            nodeList: ['LX_006', 'CO2_006', 'WV_S_006', 'T_S_006', 'RH_S_006'],
          },
          // TODO:
          {
            serial_number: 36,
            target_code: '036',
            target_name: '?????? ????????? C-2',
            dccId: 'DCC_001',
            dpcId: 'DPC_001',
            nodeList: ['S_PU_045', 'S_PU_046'], // FIXME:
          },
        ],
      },
      {
        target_prefix: 'D_OE',
        target_name: 'Outside Environment (?????? ??????)',
        dataLoggerDeviceList: [
          {
            serial_number: 7,
            target_code: '007',
            target_name: '?????? ?????? ??????',
            dccId: 'DCC_001',
            dpcId: 'DPC_001',
            nodeList: [
              'LX_007',
              'S_H_007',
              'CO2_007',
              'WV_S_007',
              'T_S_007',
              'RH_S_007',
              'T_OA_007',
              'RH_OA_007',
              'W_D_007',
              'W_S_007',
              'RF1_007',
              'IR_007',
            ],
          },
        ],
      },
      {
        target_prefix: 'D_IVT',
        target_name: '????????? DL',
        dataLoggerDeviceList: [
          {
            target_name: '?????? ????????? A (33kW ???)',
            serial_number: '001',
            target_code: '001',
            dccId: 'DCC_001',
            dpcId: 'DPC_IVT_001',
            repeatId: 'RE_PREFIX_IVT',
          },
          {
            target_name: '?????? ????????? B (33kW ???)',
            serial_number: '002',
            target_code: '002',
            dccId: 'DCC_001',
            dpcId: 'DPC_IVT_001',
            repeatId: 'RE_PREFIX_IVT',
          },
          {
            target_name: '?????? ????????? C (33kW ???)',
            serial_number: '003',
            target_code: '003',
            dccId: 'DCC_001',
            dpcId: 'DPC_IVT_001',
            repeatId: 'RE_PREFIX_IVT',
          },
        ],
      },
    ],
    nodeStructureList: [
      {
        target_id: 'temp',
        target_name: '??????',
        is_sensor: 1,
        // save_db_type: BLOCK,
        data_unit: '???',
        description: '??????: 1 atm????????? ?????? ???????????? 0???, ???????????? 100?????? ?????? ??????',
        defList: [
          {
            target_id: 'soilTemperature',
            target_prefix: 'T_S',
            target_name: '?????? ??????',
            nodeList: [
              {
                target_code: '001',
              },
              {
                target_code: '002',
              },
              {
                target_code: '003',
              },
              {
                target_code: '004',
              },
              {
                target_code: '005',
              },
              {
                target_code: '006',
              },
              {
                target_code: '007',
              },
            ],
          },
          {
            target_id: 'outsideAirTemperature',
            target_prefix: 'T_OA',
            target_name: '?????? ??????',
            nodeList: [
              {
                target_code: '007',
              },
            ],
          },
          {
            target_id: 'pvRearTemperature',
            target_prefix: 'T_PR',
            target_name: '?????? ?????? ??????',
            nodeList: [
              {
                target_code: '001',
              },
              {
                target_code: '004',
              },
            ],
          },
        ],
      },
      {
        target_id: 'reh',
        target_name: '??????',
        is_sensor: 1,
        // save_db_type: BLOCK,
        data_unit: '%RH',
        description: '?????? ?????? ???????????? ?????? ???????????? ??? ?????? ????????? ???????????? ??????',
        defList: [
          {
            target_id: 'soilReh',
            target_prefix: 'RH_S',
            target_name: '?????? ??????',
            nodeList: [
              {
                target_code: '001',
              },
              {
                target_code: '002',
              },
              {
                target_code: '003',
              },
              {
                target_code: '004',
              },
              {
                target_code: '005',
              },
              {
                target_code: '006',
              },
              {
                target_code: '007',
              },
            ],
          },
          {
            target_id: 'outsideAirReh',
            target_prefix: 'RH_OA',
            target_name: '?????? ??????',
            nodeList: [
              {
                target_code: '007',
              },
            ],
          },
        ],
      },
      {
        target_id: 'ws',
        target_name: '??????',
        is_sensor: 1,
        // save_db_type: BLOCK,
        data_unit: 'm/s',
        description: '?????? ????????? ???????????? ??????(m)',
        defList: [
          {
            target_id: 'windSpeed',
            target_prefix: 'W_S',
            nodeList: [
              {
                target_code: '007',
              },
            ],
          },
        ],
      },
      {
        target_id: 'wd',
        target_name: '??????',
        is_sensor: 1,
        // save_db_type: BLOCK,
        description: '?????? 0~7 (???, ??????, ???, ??????, ???, ??????, ???, ??????)',
        defList: [
          {
            target_id: 'windDirection',
            target_prefix: 'W_D',
            nodeList: [
              {
                target_code: '007',
              },
            ],
          },
        ],
      },
      {
        target_id: 'solar',
        target_name: '?????????',
        is_sensor: 1,
        // save_db_type: BLOCK,
        data_unit: 'W/m??',
        description: '1?????? ????????? ???????????? ?????????????????? ?????? 1W',
        defList: [
          {
            target_id: 'horizontalSolar',
            target_name: '?????? ?????????',
            target_prefix: 'S_H',
            nodeList: [
              {
                target_code: '007',
              },
            ],
          },
          {
            target_id: 'inclinedSolar',
            target_name: '?????? ?????????',
            target_prefix: 'S_I',
            nodeList: [
              {
                target_code: '001',
              },
              {
                target_code: '004',
              },
            ],
          },
          {
            target_id: 'pvUnderlyingSolar',
            target_name: '?????? ?????? ?????????',
            target_prefix: 'S_PU',
            nodeList: [
              {
                target_code: '002',
                target_name: 'B',
              },
              {
                target_code: '005',
                target_name: 'B',
              },
              // TODO: dataLoggerIndex ??????
              {
                target_code: '031',
                target_name: 'A-1',
                data_logger_index: 2,
              },
              {
                target_code: '032',
                target_name: 'A-2',
                data_logger_index: 3,
              },
              {
                target_code: '033',
                target_name: 'B-1',
                data_logger_index: 0,
              },
              {
                target_code: '034',
                target_name: 'B-2',
                data_logger_index: 1,
              },
              {
                target_code: '035',
                target_name: 'B-3',
                data_logger_index: 2,
              },
              {
                target_code: '036',
                target_name: 'B-4',
                data_logger_index: 3,
              },
              {
                target_code: '037',
                target_name: 'C-1',
                data_logger_index: 2,
              },
              {
                target_code: '038',
                target_name: 'C-2',
                data_logger_index: 3,
              },
              {
                target_code: '039',
                target_name: 'A-1',
                data_logger_index: 2,
              },
              {
                target_code: '040',
                target_name: 'A-2',
                data_logger_index: 3,
              },
              {
                target_code: '041',
                target_name: 'B-1',
                data_logger_index: 0,
              },
              {
                target_code: '042',
                target_name: 'B-2',
                data_logger_index: 1,
              },
              {
                target_code: '043',
                target_name: 'B-3',
                data_logger_index: 2,
              },
              {
                target_code: '044',
                target_name: 'B-4',
                data_logger_index: 3,
              },
              {
                target_code: '045',
                target_name: 'C-1',
                data_logger_index: 2,
              },
              {
                target_code: '046',
                target_name: 'C-2',
                data_logger_index: 3,
              },
            ],
          },
        ],
      },
      {
        target_id: 'rainfall',
        target_name: '?????????',
        is_sensor: 1,
        // save_db_type: BLOCK,
        data_unit: 'mm/hr',
        description: '????????? ????????? ?????? ?????? ?????? ??????. ????????? mm',
        defList: [
          {
            target_id: 'r1',
            target_prefix: 'RF1',
            target_name: '????????? ?????????',
            nodeList: [
              {
                target_code: '007',
              },
            ],
          },
        ],
      },
      {
        target_id: 'isRain',
        target_name: '?????? ?????? ??????',
        is_sensor: 1,
        // save_db_type: BLOCK,
        description: '????????? 1, ???????????? 0',
        defList: [
          {
            target_id: 'isRain',
            target_prefix: 'IR',
            target_name: '?????? ?????? ??????',
            nodeList: [
              {
                target_code: '007',
              },
            ],
          },
        ],
      },
      {
        target_id: 'co2',
        target_name: '???????????????',
        is_sensor: 1,
        // save_db_type: BLOCK,
        data_unit: 'ppm',
        description:
          '???????????? 1. ??????????????? ?????? 395ppm = 395/1,000,000 * 100 = 0.0395 %',
        defList: [
          {
            target_id: 'co2',
            target_prefix: 'CO2',
            nodeList: [
              {
                target_code: '001',
              },
              {
                target_code: '002',
              },
              {
                target_code: '003',
              },
              {
                target_code: '004',
              },
              {
                target_code: '005',
              },
              {
                target_code: '006',
              },
              {
                target_code: '007',
              },
            ],
          },
        ],
      },
      {
        target_id: 'uv',
        target_name: '?????????',
        is_sensor: 1,
        // save_db_type: BLOCK,
        data_unit: 'mJ/c???',
        description: '1?????? ????????? ???????????? uv ???????????? 1mJ',
        defList: [],
      },
      {
        target_id: 'lux',
        target_name: '??????',
        is_sensor: 1,
        // save_db_type: BLOCK,
        data_unit: 'lx',
        description: '1?????? ?????? ?????? 1m??? ????????? ???????????? ????????? ???',
        defList: [
          {
            target_id: 'lux',
            target_prefix: 'LX',
            nodeList: [
              {
                target_code: '001',
              },
              {
                target_code: '002',
              },
              {
                target_code: '003',
              },
              {
                target_code: '004',
              },
              {
                target_code: '005',
              },
              {
                target_code: '006',
              },
              {
                target_code: '007',
              },
            ],
          },
        ],
      },
      {
        target_id: 'waterValue',
        target_name: 'EC ???',
        is_sensor: 1,
        // save_db_type: BLOCK,
        data_unit: '%',
        description: '',
        defList: [
          {
            target_id: 'soilWaterValue',
            target_prefix: 'WV_S',
            target_name: '?????? EC ???',
            nodeList: [
              {
                target_code: '001',
              },
              {
                target_code: '002',
              },
              {
                target_code: '003',
              },
              {
                target_code: '004',
              },
              {
                target_code: '005',
              },
              {
                target_code: '006',
              },
              {
                target_code: '007',
              },
            ],
          },
        ],
      },
      {
        target_id: 'vol',
        target_name: '??????',
        is_sensor: 2,
        is_submit_api: 0,
        save_db_type: BLOCK,
        data_unit: 'V',
        description: null,
        defList: [
          {
            target_id: 'pvVol',
            target_name: '????????? PV ??????',
            target_prefix: 'IVT_PV_V',
            repeatId: 'RE_NODE_IVT',
          },
          {
            target_id: 'gridRsVol',
            target_name: 'RS ?????? ??????',
            target_prefix: 'IVT_G_RS_V',
            repeatId: 'RE_NODE_IVT',
          },
          {
            target_id: 'gridStVol',
            target_name: 'ST ?????? ??????',
            target_prefix: 'IVT_G_ST_V',
            repeatId: 'RE_NODE_IVT',
          },
          {
            target_id: 'gridTrVol',
            target_name: 'TR ?????? ??????',
            target_prefix: 'IVT_G_TR_V',
            repeatId: 'RE_NODE_IVT',
          },
        ],
      },
      {
        target_id: 'amp',
        target_name: '??????',
        is_sensor: 2,
        is_submit_api: 0,
        save_db_type: BLOCK,
        data_unit: 'A',
        description: null,
        defList: [
          {
            target_id: 'pvAmp',
            target_name: '????????? PV ??????',
            target_prefix: 'IVT_PV_A',
            repeatId: 'RE_NODE_IVT',
          },
          {
            target_id: 'gridRAmp',
            target_name: '????????? R??? ??????',
            target_prefix: 'IVT_G_R_A',
            repeatId: 'RE_NODE_IVT',
          },
          {
            target_id: 'gridSAmp',
            target_name: '????????? S??? ??????',
            target_prefix: 'IVT_G_S_A',
            repeatId: 'RE_NODE_IVT',
          },
          {
            target_id: 'gridTAmp',
            target_name: '????????? T??? ??????',
            target_prefix: 'IVT_G_T_A',
            repeatId: 'RE_NODE_IVT',
          },
        ],
      },
      {
        target_id: 'W',
        target_name: '?????????',
        is_sensor: 2,
        is_submit_api: 0,
        save_db_type: BLOCK,
        data_unit: 'W',
        description: '1 ??????(?????? W)??? 1 ??? ????????? 1 ???(N??m)??? ???????????? ????????? SI ??????',
        defList: [],
      },
      {
        target_id: 'kW',
        target_name: '?????????',
        is_sensor: 2,
        is_submit_api: 0,
        save_db_type: BLOCK,
        data_unit: 'kW',
        description:
          '1 ????????????(?????? kW)??? 1 ??? ????????? 1,000 ???(N??m)??? ???????????? ????????? SI ??????',
        defList: [
          {
            target_id: 'pvKw',
            target_name: '????????? PV ??????',
            target_prefix: 'IVT_PV_KW',
            description: 'PV',
            repeatId: 'RE_NODE_IVT',
          },
          {
            target_id: 'powerGridKw',
            target_name: '????????? ?????? ??????',
            target_prefix: 'IVT_PW_G_KW',
            description: 'Power',
            repeatId: 'RE_NODE_IVT',
          },
        ],
      },
      {
        target_id: 'MW',
        target_name: '?????????',
        is_sensor: 2,
        is_submit_api: 0,
        save_db_type: BLOCK,
        data_unit: 'MW',
        description:
          '1 ????????????(?????? MW)??? 1 ??? ????????? 1,000,000 ???(N??m)??? ???????????? ????????? SI ??????',
        defList: [],
      },
      {
        target_id: 'Wh',
        target_name: '?????????',
        is_sensor: 2,
        is_submit_api: 0,
        save_db_type: BLOCK,
        data_unit: 'Wh',
        description: '????????? ????????? ??????, 1 W??? ????????? 1 ?????? ?????? ?????? ?????? ???',
        defList: [],
      },
      {
        target_id: 'kWh',
        target_name: '?????????',
        is_sensor: 2,
        is_submit_api: 0,
        save_db_type: BLOCK,
        data_unit: 'kWh',
        description: '????????? ????????? ??????, 1 kW??? ????????? 1 ?????? ?????? ?????? ?????? ???',
        defList: [
          {
            target_id: 'powerDailyKwh',
            target_name: '????????? ?????? ?????????',
            target_prefix: 'IVT_PW_D_KWH',
            repeatId: 'RE_NODE_IVT',
          },
          {
            target_id: 'powerCpKwh',
            target_name: '????????? ?????? ?????????',
            target_prefix: 'IVT_PW_C_KWH',
            description: 'Cumulative Power Generation',
            repeatId: 'RE_NODE_IVT',
          },
        ],
      },
      {
        target_id: 'MWh',
        target_name: '?????????',
        is_sensor: 2,
        is_submit_api: 0,
        save_db_type: BLOCK,
        data_unit: 'MWh',
        description: '????????? ????????? ??????, 1 MW??? ????????? 1 ?????? ?????? ?????? ?????? ???',
        defList: [],
      },
      {
        target_id: 'powerFactor',
        target_name: '??????',
        is_sensor: 2,
        is_submit_api: 0,
        save_db_type: BLOCK,
        data_unit: '%',
        defList: [],
      },
      {
        target_id: 'frequency',
        target_name: '?????????',
        is_sensor: 2,
        is_submit_api: 0,
        save_db_type: BLOCK,
        data_unit: 'Hz',
        defList: [
          {
            target_id: 'gridLf',
            target_name: '?????? ?????????',
            target_prefix: 'IVT_G_L_F',
            repeatId: 'RE_NODE_IVT',
          },
        ],
      },
      {
        target_id: 'trouble',
        target_name: '?????? ??????',
        is_sensor: 2,
        is_submit_api: 0,
        save_db_type: TROUBLE,
        description: '???????????? ???????????? ?????? ?????????',
        defList: [
          {
            target_id: 'operTroubleList',
            target_name: '????????? ??????',
            target_prefix: 'IVT_TRB',
            repeatId: 'RE_NODE_IVT',
          },
        ],
      },
    ],
  },
  relationInfo: {
    placeRelationList: [
      {
        target_id: 'inverter',
        target_name: '?????????',
        description: '???????????? ????????? ??????',
        defList: [
          {
            target_id: 'inverter',
            target_prefix: 'P_IVT',
            placeList: [
              {
                target_code: '001',
                target_name: '?????? ????????? A (33kW ???)',
                chart_color: '#212529',
                chart_sort_rank: 1,
                repeatId: 'RE_PREFIX_IVT',
              },
              {
                target_code: '002',
                target_name: '?????? ????????? B (33kW ???)',
                chart_color: '#fcc2d7',
                chart_sort_rank: 2,
                repeatId: 'RE_PREFIX_IVT',
              },
              {
                target_code: '003',
                target_name: '?????? ????????? C (33kW ???)',
                chart_color: '#d0bfff',
                chart_sort_rank: 3,
                repeatId: 'RE_PREFIX_IVT',
              },
            ],
          },
        ],
      },
      {
        target_id: 'farmParallelSite',
        target_name: '?????? ?????? ??????',
        description: '?????? ?????? ????????? ????????? ?????? ?????? ?????? ????????? ??????',
        defList: [
          {
            target_id: 'variablePV',
            target_prefix: 'PV_V',
            target_name: '????????? ?????????',
            placeList: [
              {
                target_code: '001',
                target_name: 'A',
                chart_color: '#212529',
                chart_sort_rank: 1,
                nodeList: [
                  'LX_001',
                  'S_I_001',
                  'CO2_001',
                  'WV_S_001',
                  'T_PR_001',
                  'T_S_001',
                  'RH_S_001',
                  // FIXME:
                  'S_PU_031',
                  'S_PU_032',
                ],
              },
              {
                target_code: '002',
                target_name: 'B',
                chart_color: '#fcc2d7',
                chart_sort_rank: 2,
                nodeList: [
                  'LX_002',
                  'S_PU_002',
                  'CO2_002',
                  'WV_S_002',
                  'T_S_002',
                  'RH_S_002',
                  // FIXME:
                  'S_PU_033',
                  'S_PU_034',
                  'S_PU_035',
                  'S_PU_036',
                ],
              },
              {
                target_code: '003',
                target_name: 'C',
                chart_color: '#d0bfff',
                chart_sort_rank: 3,
                nodeList: [
                  'LX_003',
                  'CO2_003',
                  'WV_S_003',
                  'T_S_003',
                  'RH_S_003',
                  // FIXME:
                  'S_PU_037',
                  'S_PU_038',
                ],
              },
            ],
          },
          {
            target_id: 'fixingPV',
            target_prefix: 'PV_F',
            target_name: '????????? ?????????',
            placeList: [
              {
                target_code: '004',
                target_name: 'A',
                chart_color: '#99e9f2',
                chart_sort_rank: 4,
                nodeList: [
                  'LX_004',
                  'S_I_004',
                  'CO2_004',
                  'WV_S_004',
                  'T_PR_004',
                  'T_S_004',
                  'RH_S_004',
                  // FIXME:
                  'S_PU_039',
                  'S_PU_040',
                ],
              },
              {
                target_code: '005',
                target_name: 'B',
                chart_color: '#212529',
                chart_sort_rank: 5,
                nodeList: [
                  'LX_005',
                  'S_PU_005',
                  'CO2_005',
                  'WV_S_005',
                  'T_S_005',
                  'RH_S_005',
                  // FIXME:
                  'S_PU_041',
                  'S_PU_042',
                  'S_PU_043',
                  'S_PU_044',
                ],
              },
              {
                target_code: '006',
                target_name: 'C',
                chart_color: '#a9e34b',
                chart_sort_rank: 6,
                nodeList: [
                  'LX_006',
                  'CO2_006',
                  'WV_S_006',
                  'T_S_006',
                  'RH_S_006',
                  // FIXME:
                  'S_PU_045',
                  'S_PU_046',
                ],
              },
            ],
          },
        ],
      },
      {
        target_id: 'outside',
        target_name: '?????? ??????',
        description:
          '?????? ?????? ????????? ???????????? ??????????????? ?????? ????????? ????????? ????????? ???????????? ?????? ?????? ??????',
        defList: [
          {
            target_id: 'outside',
            target_prefix: 'OS',
            placeList: [
              {
                target_code: '007',
                chart_color: '#ffe066',
                chart_sort_rank: 7,
                nodeList: [
                  'LX_007',
                  'S_H_007',
                  'CO2_007',
                  'WV_S_007',
                  'T_S_007',
                  'RH_S_007',
                  'T_OA_007',
                  'RH_OA_007',
                  'W_D_007',
                  'W_S_007',
                  'RF1_007',
                  'IR_007',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  controlInfo: {},
};

module.exports = map;
