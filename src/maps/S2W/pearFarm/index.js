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
      svgModelResourceList: [],
    },
    positionInfo: {},
  },
  setInfo: {
    mainInfo: {
      uuid: '103',
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
          mainCategory: 'S2W',
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
          cmdExecTimeoutMs: 1000 * 5,
        },
      },
      {
        dpcId: 'DPC_IVT_002',
        protocol_info: {
          mainCategory: 'Inverter',
          subCategory: 's5500k',
          wrapperCategory: 'default',
          cmdExecTimeoutMs: 1000 * 5,
        },
      },
      {
        dpcId: 'DPC_IVT_003',
        protocol_info: {
          mainCategory: 'Inverter',
          subCategory: 'ESP3K5',
          wrapperCategory: 'default',
          cmdExecTimeoutMs: 1000 * 5,
        },
      },
      {
        dpcId: 'DPC_IVT_004',
        protocol_info: {
          mainCategory: 'Inverter',
          subCategory: 'KDX_300',
          wrapperCategory: 'default',
          cmdExecTimeoutMs: 1000 * 5,
        },
      },
    ],
    repeatNodeList: [
      {
        repeatId: 'RE_NODE_IVT',
        repeatCategory: 'node',
        nodeList: [
          {
            target_code: 'A',
            // target_name: 'A',
          },
          {
            target_code: 'B',
            // target_name: 'B',
          },
          {
            target_code: 'C',
            // target_name: 'C',
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
          'IVT_G_R_A',
          'IVT_G_L_F',
          'IVT_PW_G_KW',
          'IVT_PW_PF',
          'IVT_PW_D_KWH',
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
            serial_number: 41,
            target_code: '041',
            target_name: '?????????',
            dccId: 'DCC_001',
            dpcId: 'DPC_001',
            nodeList: ['S_PU_041', 'T_S_041', 'RH_S_041'],
          },
          {
            serial_number: 42,
            target_code: '042',
            target_name: '?????????',
            dccId: 'DCC_001',
            dpcId: 'DPC_001',
            nodeList: ['S_PU_042', 'T_S_042', 'RH_S_042'],
          },
        ],
      },
      {
        target_prefix: 'D_OE',
        target_name: 'Outside Environment (?????? ??????)',
        dataLoggerDeviceList: [
          {
            serial_number: 43,
            target_code: '043',
            target_name: '?????? ??????',
            dccId: 'DCC_001',
            dpcId: 'DPC_001',
            nodeList: [
              'S_H_043',
              'T_S_043',
              'RH_S_043',
              'T_OA_043',
              'RH_OA_043',
              'RF1_043',
              'W_S_043',
              'W_D_043',
            ],
          },
        ],
      },
      {
        target_prefix: 'D_IVT',
        target_name: '????????? DL',
        dataLoggerDeviceList: [
          {
            target_code: 'A',
            // target_name: 'A',
            serial_number: Buffer.from([1]),
            dccId: 'DCC_001',
            dpcId: 'DPC_IVT_003',
            repeatId: 'RE_PREFIX_IVT',
          },
          {
            target_code: 'B',
            // target_name: 'B',
            serial_number: Buffer.from([2]),
            dccId: 'DCC_001',
            dpcId: 'DPC_IVT_003',
            repeatId: 'RE_PREFIX_IVT',
          },
          {
            target_code: 'C',
            // target_name: 'C',
            serial_number: Buffer.from([3]),
            dccId: 'DCC_001',
            dpcId: 'DPC_IVT_003',
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
                target_code: '041',
              },
              {
                target_code: '042',
              },
              {
                target_code: '043',
              },
            ],
          },
          {
            target_id: 'outsideAirTemperature',
            target_prefix: 'T_OA',
            target_name: '?????? ??????',
            nodeList: [
              {
                target_code: '043',
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
                target_code: '041',
              },
              {
                target_code: '042',
              },
              {
                target_code: '043',
              },
            ],
          },
          {
            target_id: 'outsideAirReh',
            target_prefix: 'RH_OA',
            target_name: '?????? ??????',
            nodeList: [
              {
                target_code: '043',
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
                target_code: '043',
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
                target_code: '043',
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
                target_code: '043',
              },
            ],
          },
          {
            target_id: 'pvUnderlyingSolar',
            target_name: '?????? ?????????',
            target_prefix: 'S_PU',
            nodeList: [
              {
                target_code: '041',
              },
              {
                target_code: '042',
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
                target_code: '043',
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
            nodeList: [],
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
            description: 'Daily Power Generation',
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
        target_id: 'powerFactor',
        target_name: '??????',
        is_sensor: 2,
        is_submit_api: 0,
        save_db_type: BLOCK,
        data_unit: '%',
        defList: [
          {
            target_id: 'powerPf',
            target_name: '??????',
            target_prefix: 'IVT_PW_PF',
            repeatId: 'RE_NODE_IVT',
          },
        ],
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
                target_code: 'A',
                // target_name: 'A',
                chart_color: '#c92a2a',
                chart_sort_rank: 41,
                repeatId: 'RE_PREFIX_IVT',
              },
              {
                target_code: 'B',
                // target_name: 'B',
                chart_color: '#868e96',
                chart_sort_rank: 42,
                repeatId: 'RE_PREFIX_IVT',
              },
              {
                target_code: 'C',
                // target_name: 'C',
                chart_color: '#b9560d',
                chart_sort_rank: 43,
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
            target_id: 'normalType',
            target_prefix: 'PV_N',
            placeList: [
              {
                target_code: '041',
                target_name: '?????????',
                chart_color: '#c92a2a',
                chart_sort_rank: 41,
                nodeList: ['S_PU_041', 'T_S_041', 'RH_S_041'],
              },
              {
                target_code: '042',
                target_name: '?????????',
                chart_color: '#868e96',
                chart_sort_rank: 42,
                nodeList: ['S_PU_042', 'T_S_042', 'RH_S_042'],
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
                target_code: '043',
                chart_color: '#b9560d',
                chart_sort_rank: 43,
                nodeList: [
                  'S_H_043',
                  'T_S_043',
                  'RH_S_043',
                  'T_OA_043',
                  'RH_OA_043',
                  'RF1_043',
                  'W_S_043',
                  'W_D_043',
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
