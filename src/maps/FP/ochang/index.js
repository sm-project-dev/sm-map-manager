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
      uuid: '004',
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
            target_code: '008',
            target_name: '????????? (33kW ???)',
          },
          {
            target_code: '009',
            target_name: '????????? (33kW ???)',
          },
          {
            target_code: '010',
            target_name: '??????(??????)??? (33kW ???)',
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
            serial_number: 13,
            target_code: '013',
            target_name: '?????????',
            dccId: 'DCC_001',
            dpcId: 'DPC_001',
            nodeList: ['LX_013', 'S_I_013', 'CO2_013', 'WV_S_013', 'T_S_013', 'RH_S_013'],
          },
          {
            serial_number: 71,
            target_code: '071',
            target_name: '?????????',
            dccId: 'DCC_001',
            dpcId: 'DPC_001',
            nodeList: ['T_S_071', 'T_OA_071', 'RH_S_071', 'RH_OA_071', 'S_PU_071'],
          },
          {
            serial_number: 72,
            target_code: '072',
            target_name: '??????(??????)???',
            dccId: 'DCC_001',
            dpcId: 'DPC_001',
            nodeList: ['T_S_072', 'T_OA_072', 'RH_S_072', 'RH_OA_072', 'S_PU_072'],
          },
        ],
      },
      {
        target_prefix: 'D_OE',
        target_name: 'Outside Environment (?????? ??????)',
        dataLoggerDeviceList: [
          {
            serial_number: 12,
            target_code: '012',
            dccId: 'DCC_001',
            dpcId: 'DPC_001',
            nodeList: [
              'LX_012',
              'S_H_012',
              'CO2_012',
              'WV_S_012',
              'T_S_012',
              'RH_S_012',
              'T_OA_012',
              'RH_OA_012',
              'W_D_012',
              'W_S_012',
              'RF1_012',
              'IR_012',
            ],
          },
        ],
      },
      {
        target_prefix: 'D_IVT',
        target_name: '????????? DL',
        dataLoggerDeviceList: [
          {
            target_name: '????????? (33kW ???)',
            serial_number: '003',
            target_code: '008',
            dccId: 'DCC_001',
            dpcId: 'DPC_IVT_001',
            repeatId: 'RE_PREFIX_IVT',
          },
          {
            target_name: '????????? (33kW ???)',
            serial_number: '002',
            target_code: '009',
            dccId: 'DCC_001',
            dpcId: 'DPC_IVT_001',
            repeatId: 'RE_PREFIX_IVT',
          },
          {
            target_name: '??????(??????)??? (33kW ???)',
            serial_number: '001',
            target_code: '010',
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
        data_unit: '???',
        description: '??????: 1 atm????????? ?????? ???????????? 0???, ???????????? 100?????? ?????? ??????',
        defList: [
          {
            target_id: 'soilTemperature',
            target_prefix: 'T_S',
            target_name: '?????? ??????',
            nodeList: [
              {
                target_code: '012',
              },
              {
                target_code: '013',
              },
              {
                target_code: '071',
              },
              {
                target_code: '072',
              },
            ],
          },
          {
            target_id: 'outsideAirTemperature',
            target_prefix: 'T_OA',
            target_name: '?????? ??????',
            nodeList: [
              {
                target_code: '012',
              },
              {
                target_code: '071',
              },
              {
                target_code: '072',
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
                target_code: '012',
              },
              {
                target_code: '013',
              },
              {
                target_code: '071',
              },
              {
                target_code: '072',
              },
            ],
          },
          {
            target_id: 'outsideAirReh',
            target_prefix: 'RH_OA',
            target_name: '?????? ??????',
            nodeList: [
              {
                target_code: '012',
              },
              {
                target_code: '071',
              },
              {
                target_code: '072',
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
                target_code: '012',
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
                target_code: '012',
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
                target_code: '012',
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
                target_code: '013',
              },
              {
                target_code: '071',
              },
              {
                target_code: '072',
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
                target_code: '012',
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
                target_code: '012',
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
                target_code: '012',
              },
              {
                target_code: '013',
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
                target_code: '012',
              },
              {
                target_code: '013',
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
                target_code: '012',
              },
              {
                target_code: '013',
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
                target_code: '008',
                target_name: '????????? (33kW ???)',
                chart_color: '#e67700',
                chart_sort_rank: 8,
                repeatId: 'RE_PREFIX_IVT',
                nodeList: [],
              },
              {
                target_code: '009',
                target_name: '????????? (33kW ???)',
                chart_color: '#364fc7',
                chart_sort_rank: 9,
                repeatId: 'RE_PREFIX_IVT',
                nodeList: [],
              },
              {
                target_code: '010',
                target_name: '??????(??????)??? (33kW ???)',
                chart_color: '#c92a2a',
                chart_sort_rank: 10,
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
                target_code: '013',
                target_name: '?????????',
                chart_color: '#e67700',
                chart_sort_rank: 12,
                nodeList: ['LX_013', 'S_PU_013', 'CO2_013', 'WV_S_013', 'T_S_013', 'RH_S_013'],
              },
              {
                target_code: '071',
                target_name: '?????????',
                chart_color: '#212529',
                chart_sort_rank: 13,
                nodeList: ['T_S_071', 'T_OA_071', 'RH_S_071', 'RH_OA_071', 'S_PU_071'],
              },
              {
                target_code: '072',
                target_name: '??????(??????)???',
                chart_color: '#fcc2d7',
                chart_sort_rank: 14,
                nodeList: ['T_S_072', 'T_OA_072', 'RH_S_072', 'RH_OA_072', 'S_PU_072'],
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
                target_code: '012',
                chart_color: '#364fc7',
                chart_sort_rank: 15,
                nodeList: [
                  'LX_012',
                  'S_H_012',
                  'CO2_012',
                  'WV_S_012',
                  'T_S_012',
                  'RH_S_012',
                  'T_OA_012',
                  'RH_OA_012',
                  'W_D_012',
                  'W_S_012',
                  'RF1_012',
                  'IR_012',
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
