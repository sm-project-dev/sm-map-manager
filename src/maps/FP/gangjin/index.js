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
    positionList: [{}],
  },
  setInfo: {
    mainInfo: {
      uuid: '002',
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
            target_code: '004',
            target_name: 'A',
          },
          {
            target_code: '005',
            target_name: 'B',
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
            serial_number: 8,
            target_code: '008',
            dccId: 'DCC_001',
            dpcId: 'DPC_001',
            nodeList: ['LX_008', 'S_PU_008', 'CO2_008', 'WV_S_008', 'T_S_008', 'RH_S_008'],
          },
          {
            serial_number: 51,
            target_code: '051',
            dccId: 'DCC_001',
            dpcId: 'DPC_001',
            nodeList: ['W_S_051', 'W_D_051', 'S_PU_051', 'S_PU_052'],
          },
        ],
      },
      {
        target_prefix: 'D_OE',
        target_name: 'Outside Environment (?????? ??????)',
        dataLoggerDeviceList: [
          {
            serial_number: 9,
            target_code: '009',
            dccId: 'DCC_001',
            dpcId: 'DPC_001',
            nodeList: [
              'LX_009',
              'S_H_009',
              'CO2_009',
              'WV_S_009',
              'T_S_009',
              'RH_S_009',
              'T_OA_009',
              'RH_OA_009',
              'W_D_009',
              'W_S_009',
              'RF1_009',
              'IR_009',
            ],
          },
        ],
      },
      {
        target_prefix: 'D_IVT',
        target_name: '????????? DL',
        dataLoggerDeviceList: [
          {
            target_name: '?????? A (5.5kW ???)',
            serial_number: Buffer.from([64]),
            target_code: '004',
            dccId: 'DCC_001',
            dpcId: 'DPC_IVT_002',
            repeatId: 'RE_PREFIX_IVT',
          },
          {
            target_name: '?????? B (5.5kW ???)',
            serial_number: Buffer.from([65]),
            target_code: '005',
            dccId: 'DCC_001',
            dpcId: 'DPC_IVT_002',
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
        data_unit: '???',
        description: '??????: 1 atm????????? ?????? ???????????? 0???, ???????????? 100?????? ?????? ??????',
        defList: [
          {
            target_id: 'soilTemperature',
            target_prefix: 'T_S',
            target_name: '?????? ??????',
            nodeList: [
              {
                target_code: '008',
              },
              {
                target_code: '009',
              },
            ],
          },
          {
            target_id: 'outsideAirTemperature',
            target_prefix: 'T_OA',
            target_name: '?????? ??????',
            nodeList: [
              {
                target_code: '009',
              },
            ],
          },
        ],
      },
      {
        target_id: 'reh',
        target_name: '??????',
        is_sensor: 1,
        data_unit: '%RH',
        description: '?????? ?????? ???????????? ?????? ???????????? ??? ?????? ????????? ???????????? ??????',
        defList: [
          {
            target_id: 'soilReh',
            target_prefix: 'RH_S',
            target_name: '?????? ??????',
            nodeList: [
              {
                target_code: '008',
              },
              {
                target_code: '009',
              },
            ],
          },
          {
            target_id: 'outsideAirReh',
            target_prefix: 'RH_OA',
            target_name: '?????? ??????',
            nodeList: [
              {
                target_code: '009',
              },
            ],
          },
        ],
      },
      {
        target_id: 'ws',
        target_name: '??????',
        is_sensor: 1,
        data_unit: 'm/s',
        description: '?????? ????????? ???????????? ??????(m)',
        defList: [
          {
            target_id: 'windSpeed',
            target_prefix: 'W_S',
            nodeList: [
              {
                target_code: '009',
              },
              {
                target_code: '051',
              },
            ],
          },
        ],
      },
      {
        target_id: 'wd',
        target_name: '??????',
        is_sensor: 1,
        description: '?????? 0~7 (???, ??????, ???, ??????, ???, ??????, ???, ??????)',
        defList: [
          {
            target_id: 'windDirection',
            target_prefix: 'W_D',
            nodeList: [
              {
                target_code: '009',
              },
              {
                target_code: '051',
              },
            ],
          },
        ],
      },
      {
        target_id: 'solar',
        target_name: '?????????',
        is_sensor: 1,
        data_unit: 'W/m??',
        description: '1?????? ????????? ???????????? ?????????????????? ?????? 1W',
        defList: [
          {
            target_id: 'horizontalSolar',
            target_name: '?????? ?????????',
            target_prefix: 'S_H',
            nodeList: [
              {
                target_code: '009',
              },
            ],
          },
          {
            target_id: 'inclinedSolar',
            target_name: '?????? ?????????',
            target_prefix: 'S_I',
            nodeList: [],
          },
          {
            target_id: 'pvUnderlyingSolar',
            target_name: '?????? ?????? ?????????',
            target_prefix: 'S_PU',
            nodeList: [
              {
                target_code: '008',
              },
              {
                target_code: '051',
                target_name: 'A',
                data_logger_index: 2,
              },
              {
                target_code: '052',
                target_name: 'B',
                data_logger_index: 1,
              },
            ],
          },
        ],
      },
      {
        target_id: 'rainfall',
        target_name: '?????????',
        is_sensor: 1,
        data_unit: 'mm/hr',
        description: '????????? ????????? ?????? ?????? ?????? ??????. ????????? mm',
        defList: [
          {
            target_id: 'r1',
            target_prefix: 'RF1',
            target_name: '????????? ?????????',
            nodeList: [
              {
                target_code: '009',
              },
            ],
          },
        ],
      },
      {
        target_id: 'isRain',
        target_name: '?????? ?????? ??????',
        is_sensor: 1,
        data_unit: null,
        description: '????????? 1, ???????????? 0',
        defList: [
          {
            target_id: 'isRain',
            target_prefix: 'IR',
            target_name: '?????? ?????? ??????',
            nodeList: [
              {
                target_code: '009',
              },
            ],
          },
        ],
      },
      {
        target_id: 'co2',
        target_name: '???????????????',
        is_sensor: 1,
        data_unit: 'ppm',
        description: '???????????? 1. ??????????????? ?????? 395ppm = 395/1,000,000 * 100 = 0.0395 %',
        defList: [
          {
            target_id: 'co2',
            target_prefix: 'CO2',
            nodeList: [
              {
                target_code: '008',
              },
              {
                target_code: '009',
              },
            ],
          },
        ],
      },
      {
        target_id: 'uv',
        target_name: '?????????',
        is_sensor: 1,
        data_unit: 'mJ/c???',
        description: '1?????? ????????? ???????????? uv ???????????? 1mJ',
        defList: [],
      },
      {
        target_id: 'lux',
        target_name: '??????',
        is_sensor: 1,
        data_unit: 'lx',
        description: '1?????? ?????? ?????? 1m??? ????????? ???????????? ????????? ???',
        defList: [
          {
            target_id: 'lux',
            target_prefix: 'LX',
            nodeList: [
              {
                target_code: '008',
              },
              {
                target_code: '009',
              },
            ],
          },
        ],
      },
      {
        target_id: 'waterValue',
        target_name: 'EC ???',
        is_sensor: 1,
        data_unit: '%',
        description: '',
        defList: [
          {
            target_id: 'soilWaterValue',
            target_prefix: 'WV_S',
            target_name: '?????? EC ???',
            nodeList: [
              {
                target_code: '008',
              },
              {
                target_code: '009',
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
        description: '1 ????????????(?????? kW)??? 1 ??? ????????? 1,000 ???(N??m)??? ???????????? ????????? SI ??????',
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
                target_code: '004',
                target_name: '?????? A (5.5kW ???)',
                chart_color: '#0b7285',
                chart_sort_rank: 4,
                repeatId: 'RE_PREFIX_IVT',
                nodeList: [],
              },
              {
                target_code: '005',
                target_name: '?????? B (5.5kW ???)',
                chart_color: '#7048e8',
                chart_sort_rank: 5,
                repeatId: 'RE_PREFIX_IVT',
                nodeList: [],
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
            target_id: 'normalPV',
            target_prefix: 'PV_N',
            target_name: '?????????',
            placeList: [
              {
                target_code: '008',
                target_name: '??????',
                chart_color: '#0b7285',
                chart_sort_rank: 8,
                nodeList: [
                  'LX_008',
                  'S_PU_008',
                  'CO2_008',
                  'WV_S_008',
                  'T_S_008',
                  'RH_S_008',
                  'W_D_051',
                  'W_S_051',
                  'S_PU_051',
                  'S_PU_052',
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
                target_code: '009',
                chart_color: '#7048e8',
                chart_sort_rank: 9,
                nodeList: [
                  'LX_009',
                  'S_H_009',
                  'CO2_009',
                  'WV_S_009',
                  'T_S_009',
                  'RH_S_009',
                  'T_OA_009',
                  'RH_OA_009',
                  'W_D_009',
                  'W_S_009',
                  'RF1_009',
                  'IR_009',
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
