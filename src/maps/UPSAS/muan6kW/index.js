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
      mapInfo: {
        width: 3000,
        height: 2000,
        backgroundInfo: {
          backgroundData: '',
          backgroundPosition: [-60, 0],
        },
      },
      svgModelResourceList: [
        {
          id: 'salternModuleBlock_A',
          type: 'rect',
          elementDrawInfo: { width: 480, height: 300, color: '#383667', opacity: 0 },
          textStyleInfo: {
            color: 'white',
          },
        },
        {
          id: 'salternModuleBlock_B',
          type: 'rect',
          elementDrawInfo: { width: 480, height: 600, color: '#383667', opacity: 0 },
          textStyleInfo: {
            color: 'white',
          },
        },
        {
          id: 'salternNomalBlock_A',
          type: 'rect',
          elementDrawInfo: { width: 480, height: 220, color: '#86623b', opacity: 0 },
          textStyleInfo: {
            color: 'white',
          },
        },
        {
          id: 'salternNomalBlock_B',
          type: 'rect',
          elementDrawInfo: { width: 510, height: 330, color: '#86623b', opacity: 0 },
          textStyleInfo: {
            color: 'white',
          },
        },
        {
          id: 'earth',
          type: 'rect',
          elementDrawInfo: { width: 500, height: 160, color: '#4c7093', opacity: 0 },
          textStyleInfo: {
            color: 'white',
          },
        },
        {
          id: 'salternCrystalBlock',
          type: 'rect',
          elementDrawInfo: { width: 510, height: 330, color: '#4f351a', opacity: 0 },
          textStyleInfo: {
            color: 'white',
          },
        },
        {
          id: 'brineWarehouse',
          type: 'rect',
          elementDrawInfo: { width: 240, height: 220, color: '#5b666c', opacity: 0 },
          textStyleInfo: {
            color: 'white',
          },
        },
        {
          id: 'waterDoor',
          type: 'rect',
          elementDrawInfo: { width: 77, height: 77, color: ['#d7dcee', '#276cff', '#dc1d1f'] },
        },
        {
          id: 'gateValve',
          type: 'rect',
          elementDrawInfo: { width: 77, height: 77, color: ['#d7dcee', '#276cff', '#dc1d1f'] },
        },
        {
          id: 'sea',
          type: 'rect',
          elementDrawInfo: { width: 170, height: 120, color: '#0f587c', opacity: 0 },
          textStyleInfo: {
            color: 'white',
          },
        },
        {
          id: 'valve',
          type: 'polygon',
          elementDrawInfo: { width: 40, height: 40, color: ['#f2e1f2', '#f590f6', '#dc1d1f'] },
        },
        {
          id: 'pipeLine',
          type: 'line',
          elementDrawInfo: { width: 3, color: '#ff9a9a', opacity: 0 },
        },
        {
          id: 'outlet',
          type: 'circle',
          elementDrawInfo: { width: 30, height: 30, radius: 30, color: '#222222' },
        },
        {
          id: 'waterWay',
          type: 'line',
          elementDrawInfo: { width: 77, color: '#82acc1', opacity: 0 },
        },
        {
          id: 'reservoir',
          type: 'rect',
          elementDrawInfo: { width: 760, height: 150, color: '#3d4448', opacity: 0 },
          textStyleInfo: {
            color: 'white',
          },
        },
        {
          id: 'pump',
          type: 'circle',
          elementDrawInfo: {
            width: 60,
            height: 60,
            radius: 60,
            color: ['#f6e0d4', '#ff813f', '#dc1d1f'],
          },
        },
        {
          id: 'waterLevel',
          type: 'rect',
          elementDrawInfo: { width: 100, height: 50, color: '#f0f0f0' },
        },
        {
          id: 'moduleRearTemperature',
          type: 'rect',
          elementDrawInfo: { width: 100, height: 50, color: '#f0f0f0' },
        },
        {
          id: 'brineTemperature',
          type: 'rect',
          elementDrawInfo: { width: 100, height: 50, color: '#f0f0f0' },
        },
        {
          id: 'salinity',
          type: 'rect',
          elementDrawInfo: { width: 100, height: 50, color: '#f0f0f0' },
        },
      ],
    },
    positionInfo: {
      svgPlaceList: [
        {
          placeId: 'salternBlock',
          svgPositonList: [
            {
              id: 'SEB_1_A',
              name: '증발지_1A',
              resourceId: 'salternModuleBlock_A',
              point: [580, 1630],
            },
            {
              id: 'SEB_1_B',
              name: '증발지_1B',
              resourceId: 'salternModuleBlock_A',
              point: [580, 1260],
            },
            {
              id: 'SEB_1_C',
              name: '증발지_1C',
              resourceId: 'salternModuleBlock_A',
              point: [580, 890],
            },
            {
              id: 'SEB_1_D',
              name: '증발지_1D',
              resourceId: 'salternModuleBlock_A',
              point: [580, 520],
            },
            {
              id: 'SEB_1_E',
              name: '증발지_1E',
              resourceId: 'salternModuleBlock_B',
              point: [2030, 600],
            },
            {
              id: 'NEB_일반',
              name: '증발지_일반',
              resourceId: 'salternNomalBlock_A',
              point: [580, 242],
            },
            {
              id: 'NEB_2',
              name: '증발지_2',
              resourceId: 'salternNomalBlock_B',
              point: [1144, 467],
            },
            {
              id: 'NEB_3',
              name: '증발지_3',
              resourceId: 'salternNomalBlock_B',
              point: [1144, 847],
            },
            {
              id: 'NEB_4',
              name: '증발지_4',
              resourceId: 'salternNomalBlock_B',
              point: [1144, 1227],
            },
            { id: 'NCB', name: '결정지', resourceId: 'salternCrystalBlock', point: [1144, 1607] },
          ],
        },
        {
          placeId: 'earth',
          svgPositonList: [
            { id: 'EA_일반', name: '육상_일반', resourceId: 'earth', point: [10, 1600] },
            { id: 'EA_G2G', name: '육상_G2G', resourceId: 'earth', point: [10, 1770] },
          ],
        },
        {
          placeId: 'brineWarehouse',
          svgPositonList: [
            { id: 'BW_1', name: '해주_1', resourceId: 'brineWarehouse', point: [1100, 162] },
            { id: 'BW_2', name: '해주_2', resourceId: 'brineWarehouse', point: [1360, 162] },
            { id: 'BW_3', name: '해주_3', resourceId: 'brineWarehouse', point: [1620, 162] },
          ],
        },
        {
          placeId: 'reservoir',
          svgPositonList: [{ id: 'RV', name: '저수조', resourceId: 'reservoir', point: [1100, 3] }],
        },
        {
          placeId: 'sea',
          svgPositonList: [{ id: 'SEA', name: '바다', resourceId: 'sea', point: [1858.5, 1812] }],
        },
        {
          placeId: 'waterWay',
          svgPositonList: [
            {
              id: 'WW_001',
              name: '수로_1',
              resourceId: 'waterWay',
              point: [1104.5, 1940, 1104.5, 467],
            },
            {
              id: 'WW_002',
              name: '수로_2',
              resourceId: 'waterWay',
              point: [1066, 428.5, 1340, 428.5],
            },
            {
              id: 'WW_003',
              name: '수로_3',
              resourceId: 'waterWay',
              point: [1700, 1940, 1700, 467],
            },
            {
              id: 'WW_004',
              name: '수로_4',
              resourceId: 'waterWay',
              point: [1340, 428.5, 1858.5, 428.5],
            },
            {
              id: 'WW_005',
              name: '수로_5',
              resourceId: 'waterWay',
              point: [1820, 1940, 1820, 462],
            },
            {
              id: 'WW_006',
              name: '수로_6',
              resourceId: 'waterWay',
              point: [2270.5, 1940, 2270.5, 1200],
            },
            {
              id: 'WW_007',
              name: '수로_7',
              resourceId: 'waterWay',
              point: [2035.5, 1902, 2270.5, 1902],
            },
          ],
        },
        {
          placeId: 'pipeLine',
          svgPositonList: [
            { id: 'PL_001', name: '파이프_1', resourceId: 'pipeLine', point: [1860, 20, 2550, 20] },
            {
              id: 'PL_002',
              name: '파이프_2',
              resourceId: 'pipeLine',
              point: [2550, 1845, 2550, 20],
            },
            { id: 'PL_003', name: '파이프_3', resourceId: 'pipeLine', point: [550, 40, 1100, 40] },
            {
              id: 'PL_004',
              name: '파이프_4',
              resourceId: 'pipeLine',
              point: [550, 195, 1100, 195],
            },
            { id: 'PL_005', name: '파이프_5', resourceId: 'pipeLine', point: [550, 195, 550, 36] },
            { id: 'PL_006', name: '파이프_6', resourceId: 'pipeLine', point: [550, 860, 550, 195] },
            { id: 'PL_007', name: '파이프_7', resourceId: 'pipeLine', point: [550, 860, 620, 860] },
            { id: 'PL_008', name: '파이프_8', resourceId: 'pipeLine', point: [620, 860, 620, 820] },
            { id: 'PL_009', name: '파이프_9', resourceId: 'pipeLine', point: [620, 900, 620, 860] },
            {
              id: 'PL_010',
              name: '파이프_10',
              resourceId: 'pipeLine',
              point: [550, 1600, 550, 860],
            },
            {
              id: 'PL_011',
              name: '파이프_11',
              resourceId: 'pipeLine',
              point: [550, 1600, 620, 1600],
            },
            {
              id: 'PL_012',
              name: '파이프_12',
              resourceId: 'pipeLine',
              point: [620, 1600, 620, 1560],
            },
            {
              id: 'PL_013',
              name: '파이프_13',
              resourceId: 'pipeLine',
              point: [620, 1640, 620, 1600],
            },
            {
              id: 'PL_014',
              name: '파이프_14',
              resourceId: 'pipeLine',
              point: [1573, 467, 1573, 225],
            },
            {
              id: 'PL_015',
              name: '파이프_15',
              resourceId: 'pipeLine',
              point: [2035.5, 1845, 2550, 1845],
            },
            {
              id: 'PL_016',
              name: '파이프_16',
              resourceId: 'pipeLine',
              point: [1860, 195, 1900, 195],
            },
            {
              id: 'PL_017',
              name: '파이프_17',
              resourceId: 'pipeLine',
              point: [1900, 1617, 1900, 195],
            },
            {
              id: 'PL_018',
              name: '파이프_18',
              resourceId: 'pipeLine',
              point: [1660, 1620, 1900, 1620],
            },
            {
              id: 'PL_019',
              name: '파이프_19',
              resourceId: 'pipeLine',
              point: [1860, 120, 2100, 120],
            },
            {
              id: 'PL_020',
              name: '파이프_20',
              resourceId: 'pipeLine',
              point: [2100, 600, 2100, 120],
            },
          ],
        },
      ],
      svgNodeList: [
        {
          nodeDefId: 'gateValve',
          is_sensor: 0,
          svgPositonList: [
            {
              id: 'GV_001',
              name: '수문 용 밸브_001',
              placeId: 'SEB_1_A',
              resourceId: 'gateValve',
              point: [983, 1791.4],
            },
            {
              id: 'GV_002',
              name: '수문 용 밸브_002',
              placeId: 'SEB_1_B',
              resourceId: 'gateValve',
              point: [983, 1421.4],
            },
            {
              id: 'GV_003',
              name: '수문 용 밸브_003',
              placeId: 'SEB_1_C',
              resourceId: 'gateValve',
              point: [983, 1051.4],
            },
            {
              id: 'GV_004',
              name: '수문 용 밸브_004',
              placeId: 'SEB_1_D',
              resourceId: 'gateValve',
              point: [983, 681.4],
            },
            {
              id: 'GV_005',
              name: '수문 용 밸브_005',
              placeId: 'SEB_1_E',
              resourceId: 'gateValve',
              point: [2231.5, 1123],
            },
          ],
        },
        {
          nodeDefId: 'valve',
          is_sensor: 0,
          svgPositonList: [
            {
              id: 'V_001',
              name: '밸브_001',
              placeId: 'SEB_1_A',
              resourceId: 'valve',
              point: [580, 1630],
            },
            {
              id: 'V_002',
              name: '밸브_002',
              placeId: 'SEB_1_B',
              resourceId: 'valve',
              point: [580, 1480],
            },
            {
              id: 'V_003',
              name: '밸브_003',
              placeId: 'SEB_1_C',
              resourceId: 'valve',
              point: [580, 890],
            },
            {
              id: 'V_004',
              name: '밸브_004',
              placeId: 'SEB_1_D',
              resourceId: 'valve',
              point: [580, 740],
            },
            {
              id: 'V_006',
              name: '밸브_006',
              placeId: 'PL_003',
              resourceId: 'valve',
              point: [550, -1.5],
            },
            {
              id: 'V_007',
              name: '밸브_007',
              placeId: 'PL_004',
              resourceId: 'valve',
              point: [550, 153.5],
            },
          ],
        },
        {
          nodeDefId: 'outlet',
          is_sensor: -1,

          svgPositonList: [
            {
              id: 'O_001',
              name: '배출구_001',
              placeId: 'SEB_1_A',
              resourceId: 'outlet',
              point: [604, 1711],
            },
            {
              id: 'O_002',
              name: '배출구_002',
              placeId: 'SEB_1_B',
              resourceId: 'outlet',
              point: [604, 1449],
            },
            {
              id: 'O_003',
              name: '배출구_003',
              placeId: 'SEB_1_C',
              resourceId: 'outlet',
              point: [604, 971],
            },
            {
              id: 'O_004',
              name: '배출구_004',
              placeId: 'SEB_1_D',
              resourceId: 'outlet',
              point: [604, 709],
            },
            {
              id: 'O_008',
              name: '배출구_008',
              placeId: 'SEB_1_E',
              resourceId: 'outlet',
              point: [2090, 600],
            },
            {
              id: 'O_005',
              name: '배출구_005',
              placeId: 'NEB_2',
              resourceId: 'outlet',
              point: [1558, 467],
            },
            {
              id: 'O_006',
              name: '배출구_006',
              placeId: 'NCB',
              resourceId: 'outlet',
              point: [1624, 1607],
            },
            {
              id: 'O_007',
              name: '배출구_007',
              placeId: 'RV',
              resourceId: 'outlet',
              point: [1830, 3],
            },
          ],
        },
        {
          nodeDefId: 'waterDoor',
          is_sensor: 0,
          svgPositonList: [
            {
              id: 'WD_005',
              name: '수문_005',
              placeId: 'NEB_일반',
              resourceId: 'waterDoor',
              point: [983, 385],
            },
            {
              id: 'WD_006',
              name: '수문_006',
              placeId: 'NEB_2',
              resourceId: 'waterDoor',
              point: [1144, 781.6],
            },
            {
              id: 'WD_007',
              name: '수문_007',
              placeId: 'NEB_3',
              resourceId: 'waterDoor',
              point: [1144, 1161.6],
            },
            {
              id: 'WD_008',
              name: '수문_008',
              placeId: 'NEB_4',
              resourceId: 'waterDoor',
              point: [1577, 1480],
            },
            {
              id: 'WD_009',
              name: '수문_009',
              placeId: 'NCB',
              resourceId: 'waterDoor',
              point: [1577, 1860],
            },
            {
              id: 'WD_010',
              name: '수문_010',
              placeId: 'BW_1',
              resourceId: 'waterDoor',
              point: [1177, 305],
            },
            {
              id: 'WD_011',
              name: '수문_011',
              placeId: 'BW_2',
              resourceId: 'waterDoor',
              point: [1437, 305],
            },
            {
              id: 'WD_012',
              name: '수문_012',
              placeId: 'BW_3',
              resourceId: 'waterDoor',
              point: [1697, 305],
            },
            {
              id: 'WD_013',
              name: '수문_013',
              placeId: 'WW_001',
              resourceId: 'waterDoor',
              point: [1066, 467],
            },
            {
              id: 'WD_016',
              name: '수문_016',
              placeId: 'WW_002',
              resourceId: 'waterDoor',
              point: [1263, 386.15],
            },
            {
              id: 'WD_014',
              name: '수문_014',
              placeId: 'WW_003',
              resourceId: 'waterDoor',
              point: [1661.5, 467],
            },
            {
              id: 'WD_015',
              name: '수문_015',
              placeId: 'WW_004',
              resourceId: 'waterDoor',
              point: [1781.5, 467],
            },
          ],
        },
        {
          nodeDefId: 'pump',
          is_sensor: 0,
          svgPositonList: [
            {
              id: 'P_003',
              name: '펌프_003',
              placeId: 'BW_1',
              resourceId: 'pump',
              point: [1100, 162],
            },
            {
              id: 'P_004',
              name: '펌프_004',
              placeId: 'BW_2',
              resourceId: 'pump',
              point: [1540, 162],
            },
            {
              id: 'P_005',
              name: '펌프_005',
              placeId: 'BW_3',
              resourceId: 'pump',
              point: [1800, 162],
            },
            { id: 'P_002', name: '펌프_002', placeId: 'RV', resourceId: 'pump', point: [1100, 3] },
            { id: 'P_006', name: '펌프_006', placeId: 'RV', resourceId: 'pump', point: [1800, 93] },
            {
              id: 'P_001',
              name: '펌프_001',
              placeId: 'SEA',
              resourceId: 'pump',
              point: [1968.5, 1812],
            },
          ],
        },
        {
          nodeDefId: 'moduleRearTemperature',
          is_sensor: 1,
          svgPositonList: [
            {
              id: 'MRT_006',
              name: '모듈 뒷면 온도_006',
              placeId: 'EA_일반',
              resourceId: 'moduleRearTemperature',
              point: [210, 1605],
            },
          ],
        },
        {
          nodeDefId: 'moduleRearTemperature',
          is_sensor: 1,
          svgPositonList: [
            {
              id: 'MRT_005',
              name: '모듈 뒷면 온도_005',
              placeId: 'EA_G2G',
              resourceId: 'moduleRearTemperature',
              point: [210, 1775],
            },
          ],
        },
        {
          nodeDefId: 'waterLevel',
          is_sensor: 1,
          svgPositonList: [
            {
              id: 'WL_001',
              name: '수위_001',
              placeId: 'SEB_1_A',
              resourceId: 'waterLevel',
              point: [670, 1705],
            },
          ],
        },
        {
          nodeDefId: 'moduleRearTemperature',
          is_sensor: 1,
          svgPositonList: [
            {
              id: 'MRT_001',
              name: '모듈 뒷면 온도_001',
              placeId: 'SEB_1_A',
              resourceId: 'moduleRearTemperature',
              point: [870, 1705],
            },
          ],
        },
        {
          nodeDefId: 'brineTemperature',
          is_sensor: 1,
          svgPositonList: [
            {
              id: 'BT_001',
              name: '염수 온도_001',
              placeId: 'SEB_1_A',
              resourceId: 'brineTemperature',
              point: [670, 1805],
            },
          ],
        },
        {
          nodeDefId: 'waterLevel',
          is_sensor: 1,
          svgPositonList: [
            {
              id: 'WL_002',
              name: '수위_002',
              placeId: 'SEB_1_B',
              resourceId: 'waterLevel',
              point: [670, 1335],
            },
          ],
        },
        {
          nodeDefId: 'moduleRearTemperature',
          is_sensor: 1,
          svgPositonList: [
            {
              id: 'MRT_002',
              name: '모듈 뒷면 온도_002',
              placeId: 'SEB_1_B',
              resourceId: 'moduleRearTemperature',
              point: [870, 1335],
            },
          ],
        },
        {
          nodeDefId: 'brineTemperature',
          is_sensor: 1,
          svgPositonList: [
            {
              id: 'BT_002',
              name: '염수 온도_002',
              placeId: 'SEB_1_B',
              resourceId: 'brineTemperature',
              point: [670, 1435],
            },
          ],
        },
        {
          nodeDefId: 'waterLevel',
          is_sensor: 1,
          svgPositonList: [
            {
              id: 'WL_003',
              name: '수위_003',
              placeId: 'SEB_1_C',
              resourceId: 'waterLevel',
              point: [670, 965],
            },
          ],
        },
        {
          nodeDefId: 'moduleRearTemperature',
          is_sensor: 1,
          svgPositonList: [
            {
              id: 'MRT_003',
              name: '모듈 뒷면 온도_003',
              placeId: 'SEB_1_C',
              resourceId: 'moduleRearTemperature',
              point: [870, 965],
            },
          ],
        },
        {
          nodeDefId: 'brineTemperature',
          is_sensor: 1,
          svgPositonList: [
            {
              id: 'BT_003',
              name: '염수 온도_003',
              placeId: 'SEB_1_C',
              resourceId: 'brineTemperature',
              point: [670, 1065],
            },
          ],
        },
        {
          nodeDefId: 'waterLevel',
          is_sensor: 1,
          svgPositonList: [
            {
              id: 'WL_004',
              name: '수위_004',
              placeId: 'SEB_1_D',
              resourceId: 'waterLevel',
              point: [670, 595],
            },
          ],
        },
        {
          nodeDefId: 'moduleRearTemperature',
          is_sensor: 1,
          svgPositonList: [
            {
              id: 'MRT_004',
              name: '모듈 뒷면 온도_004',
              placeId: 'SEB_1_D',
              resourceId: 'moduleRearTemperature',
              point: [870, 595],
            },
          ],
        },
        {
          nodeDefId: 'brineTemperature',
          is_sensor: 1,
          svgPositonList: [
            {
              id: 'BT_004',
              name: '염수 온도_004',
              placeId: 'SEB_1_D',
              resourceId: 'brineTemperature',
              point: [670, 695],
            },
          ],
        },
        {
          nodeDefId: 'moduleRearTemperature',
          is_sensor: 1,
          svgPositonList: [
            {
              id: 'MRT_007',
              name: '모듈 뒷면 온도_007',
              placeId: 'SEB_1_E',
              resourceId: 'moduleRearTemperature',
              point: [2120, 825],
            },
          ],
        },
        {
          nodeDefId: 'waterLevel',
          is_sensor: 1,
          svgPositonList: [
            {
              id: 'WL_005',
              name: '수위_005',
              placeId: 'SEB_1_E',
              resourceId: 'waterLevel',
              point: [2320, 825],
            },
          ],
        },
        {
          nodeDefId: 'brineTemperature',
          is_sensor: 1,
          svgPositonList: [
            {
              id: 'BT_005',
              name: '염수 온도_005',
              placeId: 'SEB_1_E',
              resourceId: 'brineTemperature',
              point: [2120, 925],
            },
          ],
        },
        // {
        //   nodeDefId: 'salinity',
        //   is_sensor: 1,
        //   defList: [
        //     {
        //       id: 'S_001',
        //       name: '염도_001',
        //       placeId: 'BW_1',
        //       resourceId: 'salinity',
        //       point: [1170, 197],
        //     },
        //   ],
        // },
        // {
        //   nodeDefId: 'salinity',
        //   is_sensor: 1,
        //   defList: [
        //     {
        //       id: 'S_002',
        //       name: '염도_002',
        //       placeId: 'BW_2',
        //       resourceId: 'salinity',
        //       point: [1430, 197],
        //     },
        //   ],
        // },
        // {
        //   nodeDefId: 'salinity',
        //   is_sensor: 1,
        //   defList: [
        //     {
        //       id: 'S_003',
        //       name: '염도_003',
        //       placeId: 'BW_3',
        //       resourceId: 'salinity',
        //       point: [1690, 197],
        //     },
        //   ],
        // },
      ],
    },
  },
  setInfo: {
    mainInfo: { main_seq: 1, uuid: 'aaaaa' },
    dccConstructorList: [
      {
        dccId: 'DCC_TEST_001',
        dccName: '테스트 용',
        connect_info: { type: 'socket', subType: '', host: 'localhost', port: 9000 },
      },
      {
        dccId: 'DCC_SSCS_001',
        dccName: '수중 태양광 장치 로거',
        connect_info: {
          type: 'zigbee',
          subType: 'xbee',
          baudRate: 9600,
          port: 'COM2',
          retryChance: 5,
        },
      },
      {
        dccId: 'DCC_CNT_001',
        dccName: '육상 태양광 접속반 로거',
        connect_info: { type: 'serial', subType: '', baudRate: 9600, port: 'COM9' },
      },
      {
        dccId: 'DCC_CNT_002',
        dccName: '수중 태양광 접속반 로거',
        connect_info: { type: 'serial', subType: '', baudRate: 9600, port: 'COM10' },
      },
      {
        dccId: 'DCC_IVT_001',
        dccName: '육상 G2G(다) 인버터 로거',
        connect_info: {
          type: 'serial',
          subType: 'parser',
          baudRate: 9600,
          port: 'COM11',
          addConfigInfo: {
            parser: 'delimiterParser',
            option: Buffer.from([0x04]),
          },
        },
      },
      {
        dccId: 'DCC_IVT_002',
        dccName: '육상 일반(다) 인버터 로거',
        connect_info: {
          type: 'serial',
          subType: 'parser',
          baudRate: 9600,
          port: 'COM12',
          addConfigInfo: {
            parser: 'delimiterParser',
            option: Buffer.from([0x04]),
          },
        },
      },
      {
        dccId: 'DCC_IVT_003',
        dccName: '수중 G2G(다) 인버터 로거',
        connect_info: {
          type: 'serial',
          subType: 'parser',
          baudRate: 9600,
          port: 'COM13',
          addConfigInfo: {
            parser: 'delimiterParser',
            option: Buffer.from([0x04]),
          },
        },
      },
      {
        dccId: 'DCC_IVT_004',
        dccName: '수중 일반(다) 인버터 로거',
        connect_info: {
          type: 'serial',
          subType: 'parser',
          baudRate: 9600,
          port: 'COM14',
          addConfigInfo: {
            parser: 'delimiterParser',
            option: Buffer.from([0x04]),
          },
        },
      },
      {
        dccId: 'DCC_IVT_005',
        dccName: '수중 G2G(단) 인버터 로거',
        connect_info: {
          type: 'serial',
          subType: 'parser',
          baudRate: 9600,
          port: 'COM15',
          addConfigInfo: {
            parser: 'delimiterParser',
            option: Buffer.from([0x04]),
          },
        },
      },
      {
        dccId: 'DCC_IVT_006',
        dccName: '수중 일반(단) 인버터 로거',
        connect_info: {
          type: 'serial',
          subType: 'parser',
          baudRate: 9600,
          port: 'COM16',
          addConfigInfo: {
            parser: 'delimiterParser',
            option: Buffer.from([0x04]),
          },
        },
      },
      {
        dccId: 'DCC_IVT_007',
        dccName: '개선형 수중 G2G(단) 인버터 로거',
        connect_info: {
          type: 'serial',
          subType: 'parser',
          baudRate: 9600,
          port: 'COM22',
          addConfigInfo: {
            parser: 'delimiterParser',
            option: Buffer.from([0x04]),
          },
        },
      },
    ],
    dpcConstructorList: [
      { dpcId: 'DPC_001', protocol_info: { mainCategory: 'UPSAS', subCategory: 'xbee' } },
      { dpcId: 'DPC_IVT_001', protocol_info: { mainCategory: 'Inverter', subCategory: 'das_1.3' } },
      { dpcId: 'DPC_CNT_001', protocol_info: { mainCategory: 'Connector', subCategory: 'dmTech' } },
    ],
    repeatNodeList: [
      {
        repeatId: 'RE_NODE_CNT',
        repeatCategory: 'node',
        nodeList: [
          {
            target_code: '001',
            target_name: '육상 G2G 다결정',
            data_logger_index: 1,
          },
          {
            target_code: '002',
            target_name: '육상 일반 다결정',
            data_logger_index: 2,
          },
          {
            target_code: '003',
            target_name: '수중 G2G 다결정',
            data_logger_index: 1,
          },
          {
            target_code: '004',
            target_name: '수중 일반 다결정',
            data_logger_index: 2,
          },
          {
            target_code: '005',
            target_name: '수중 G2G 단결정',
            data_logger_index: 3,
          },
          {
            target_code: '006',
            target_name: '수중 일반 단결정',
            data_logger_index: 4,
          },
          {
            target_code: '007',
            target_name: '수중 G2G 개선형 단결정',
            data_logger_index: 3,
          },
        ],
      },
    ],
    dataLoggerStructureList: [
      {
        target_prefix: 'D_G',
        target_name: '수문 DL',
        dataLoggerDeviceList: [
          {
            serial_number: '0013A20040F7ACC8',
            target_code: '005',
            isAddSerialNumberToDCC: false,
            dccId: 'DCC_SSCS_001',
            dpcId: 'DPC_001',
            nodeList: ['WD_005'],
          },
          {
            serial_number: '0013A20040F7B486',
            target_code: '006',
            isAddSerialNumberToDCC: false,
            dccId: 'DCC_SSCS_001',
            dpcId: 'DPC_001',
            nodeList: ['WD_006'],
          },
          {
            serial_number: '0013A20040F7B47C',
            target_code: '007',
            isAddSerialNumberToDCC: false,
            dccId: 'DCC_SSCS_001',
            dpcId: 'DPC_001',
            nodeList: ['WD_007'],
          },
          {
            serial_number: '0013A20040F7AB9C',
            target_code: '008',
            isAddSerialNumberToDCC: false,
            dccId: 'DCC_SSCS_001',
            dpcId: 'DPC_001',
            nodeList: ['WD_008'],
          },
          {
            serial_number: '0013A20040F7B430',
            target_code: '009',
            isAddSerialNumberToDCC: false,
            dccId: 'DCC_SSCS_001',
            dpcId: 'DPC_001',
            nodeList: ['WD_009'],
          },
          {
            serial_number: '0013A20040F7AB7D',
            target_code: '010',
            isAddSerialNumberToDCC: false,
            dccId: 'DCC_SSCS_001',
            dpcId: 'DPC_001',
            nodeList: ['WD_010', 'S_001'],
          },
          {
            serial_number: '0013A20040F7B4A9',
            target_code: '011',
            isAddSerialNumberToDCC: false,
            dccId: 'DCC_SSCS_001',
            dpcId: 'DPC_001',
            nodeList: ['WD_011', 'S_002'],
          },
          {
            serial_number: '0013A20040F7B460',
            target_code: '012',
            isAddSerialNumberToDCC: false,
            dccId: 'DCC_SSCS_001',
            dpcId: 'DPC_001',
            nodeList: ['WD_012', 'S_003'],
          },
          {
            serial_number: '0013A20040F7B49B',
            target_code: '013',
            isAddSerialNumberToDCC: false,
            dccId: 'DCC_SSCS_001',
            dpcId: 'DPC_001',
            nodeList: ['WD_013'],
          },
          {
            serial_number: '0013A20040F7B453',
            target_code: '014',
            isAddSerialNumberToDCC: false,
            dccId: 'DCC_SSCS_001',
            dpcId: 'DPC_001',
            nodeList: ['WD_014'],
          },
          {
            serial_number: '0013A20040F7B474',
            target_code: '015',
            isAddSerialNumberToDCC: false,
            dccId: 'DCC_SSCS_001',
            dpcId: 'DPC_001',
            nodeList: ['WD_015'],
          },
          {
            serial_number: '0013A20040F7AB98',
            target_code: '016',
            isAddSerialNumberToDCC: false,
            dccId: 'DCC_SSCS_001',
            dpcId: 'DPC_001',
            nodeList: ['WD_016'],
          },
        ],
      },
      {
        target_prefix: 'D_V',
        target_name: '밸브 DL',
        dataLoggerDeviceList: [
          {
            serial_number: '0013A20040F7B47F',
            target_code: '001',
            isAddSerialNumberToDCC: false,
            dccId: 'DCC_SSCS_001',
            dpcId: 'DPC_001',
            nodeList: ['V_001', 'MRT_001', 'BT_001'],
          },
          {
            serial_number: '0013A20040F7B4A4',
            target_code: '002',
            isAddSerialNumberToDCC: false,
            dccId: 'DCC_SSCS_001',
            dpcId: 'DPC_001',
            nodeList: ['V_002', 'MRT_002', 'BT_002'],
          },
          {
            serial_number: '0013A20040F7B455',
            target_code: '003',
            isAddSerialNumberToDCC: false,
            dccId: 'DCC_SSCS_001',
            dpcId: 'DPC_001',
            nodeList: ['V_003', 'MRT_003', 'BT_003'],
          },
          {
            serial_number: '0013A20040F7B43C',
            target_code: '004',
            isAddSerialNumberToDCC: false,
            dccId: 'DCC_SSCS_001',
            dpcId: 'DPC_001',
            nodeList: ['V_004', 'MRT_004', 'BT_004'],
          },
          {
            serial_number: '0013A20040F7B469',
            target_code: '006',
            isAddSerialNumberToDCC: false,
            dccId: 'DCC_SSCS_001',
            dpcId: 'DPC_001',
            nodeList: ['V_006'],
          },
          {
            serial_number: '0013A20040F7B4A7',
            target_code: '007',
            isAddSerialNumberToDCC: false,
            dccId: 'DCC_SSCS_001',
            dpcId: 'DPC_001',
            nodeList: ['V_007'],
          },
        ],
      },
      {
        target_prefix: 'D_GV',
        target_name: '게이트형 밸브',
        dataLoggerDeviceList: [
          {
            serial_number: '0013A20040F7AB81',
            target_code: '001',
            isAddSerialNumberToDCC: false,
            dccId: 'DCC_SSCS_001',
            dpcId: 'DPC_001',
            nodeList: ['GV_001', 'WL_001'],
          },
          {
            serial_number: '0013A20040F7AB76',
            target_code: '002',
            isAddSerialNumberToDCC: false,
            dccId: 'DCC_SSCS_001',
            dpcId: 'DPC_001',
            nodeList: ['GV_002', 'WL_002'],
          },
          {
            serial_number: '0013A20040F7AB69',
            target_code: '003',
            isAddSerialNumberToDCC: false,
            dccId: 'DCC_SSCS_001',
            dpcId: 'DPC_001',
            nodeList: ['GV_003', 'WL_003'],
          },
          {
            serial_number: '0013A20040F7AB96',
            target_code: '004',
            isAddSerialNumberToDCC: false,
            dccId: 'DCC_SSCS_001',
            dpcId: 'DPC_001',
            nodeList: ['GV_004', 'WL_004'],
          },
          {
            serial_number: '0013A20040F7B4AB',
            target_code: '005',
            isAddSerialNumberToDCC: false,
            dccId: 'DCC_SSCS_001',
            dpcId: 'DPC_001',
            nodeList: ['GV_005', 'WL_005', 'BT_005', 'MRT_007'],
          },
        ],
      },
      {
        target_prefix: 'D_EP',
        target_name: '육상 모듈 DL',
        dataLoggerDeviceList: [
          {
            serial_number: '0013A20040F7AB86',
            target_code: '001',
            isAddSerialNumberToDCC: false,
            dccId: 'DCC_SSCS_001',
            dpcId: 'DPC_001',
            nodeList: ['MRT_005', 'MRT_006'],
          },
        ],
      },
      {
        target_prefix: 'D_P',
        target_name: '펌프 DL',
        dataLoggerDeviceList: [
          {
            serial_number: '0013A20040F7B451',
            target_code: '001',
            isAddSerialNumberToDCC: false,
            dccId: 'DCC_SSCS_001',
            dpcId: 'DPC_001',
            nodeList: ['P_001'],
          },
          {
            serial_number: '0013A20040F7B446',
            target_code: '002',
            isAddSerialNumberToDCC: false,
            dccId: 'DCC_SSCS_001',
            dpcId: 'DPC_001',
            nodeList: ['P_002'],
          },
          {
            serial_number: '0013A20040F7B44A',
            target_code: '003',
            isAddSerialNumberToDCC: false,
            dccId: 'DCC_SSCS_001',
            dpcId: 'DPC_001',
            nodeList: ['P_003'],
          },
          {
            serial_number: '0013A20040F7A4E0',
            target_code: '004',
            isAddSerialNumberToDCC: false,
            dccId: 'DCC_SSCS_001',
            dpcId: 'DPC_001',
            nodeList: ['P_004'],
          },
          {
            serial_number: '0013A20040F7A4D8',
            target_code: '005',
            isAddSerialNumberToDCC: false,
            dccId: 'DCC_SSCS_001',
            dpcId: 'DPC_001',
            nodeList: ['P_005'],
          },
          {
            serial_number: '0013A20040F7AB1C',
            target_code: '006',
            isAddSerialNumberToDCC: false,
            dccId: 'DCC_SSCS_001',
            dpcId: 'DPC_001',
            nodeList: ['P_006'],
          },
        ],
      },
      {
        target_prefix: 'D_GR',
        target_name: '지락 계전기 DL',
        dataLoggerDeviceList: [
          {
            serial_number: '0013A20040F7B47E',
            target_code: '001',
            isAddSerialNumberToDCC: false,
            dccId: 'DCC_SSCS_001',
            dpcId: 'DPC_001',
            nodeList: ['CGR_001', 'CGR_002'],
          },
        ],
      },
      {
        target_prefix: 'D_CNT',
        target_name: '접속반',
        dataLoggerDeviceList: [
          {
            serial_number: '001',
            target_code: '001',
            dccId: 'DCC_CNT_001',
            dpcId: 'DPC_CNT_001',
            nodeList: [
              'CNT_V_001',
              'CNT_A_001',
              'CNT_V_002',
              'CNT_A_002',
              'CNT_V_007',
              'CNT_A_007',
            ],
          },
          {
            serial_number: '002',
            target_code: '002',
            dccId: 'DCC_CNT_002',
            dpcId: 'DPC_CNT_001',
            nodeList: [
              'CNT_V_003',
              'CNT_A_003',
              'CNT_V_004',
              'CNT_A_004',
              'CNT_V_005',
              'CNT_A_005',
              'CNT_V_006',
              'CNT_A_006',
            ],
          },
        ],
      },
    ],
    nodeStructureList: [
      {
        target_id: 'vol',
        target_name: '전압',
        is_sensor: 1,
        save_db_type: BLOCK,
        data_unit: 'V',
        description: null,
        defList: [
          {
            target_id: 'vol',
            target_name: '접속반 전압',
            target_prefix: 'CNT_V',
            repeatId: 'RE_NODE_CNT',
          },
        ],
      },
      {
        target_id: 'amp',
        target_name: '전류',
        is_sensor: 1,
        save_db_type: BLOCK,
        data_unit: 'A',
        description: null,
        defList: [
          {
            target_id: 'amp',
            target_name: '접속반 전류',
            target_prefix: 'CNT_A',
            repeatId: 'RE_NODE_CNT',
          },
        ],
      },
      {
        target_id: 'temp',
        target_name: '온도',
        is_sensor: 1,
        data_unit: '℃',
        description: '섭씨',
        defList: [
          {
            target_id: 'moduleFrontTemperature',
            target_prefix: 'MFT',
            target_name: '모듈 앞면 온도',
            description: null,
            nodeList: [],
          },
          {
            target_id: 'moduleRearTemperature',
            target_prefix: 'MRT',
            target_name: '모듈 뒷면 온도',
            description: null,
            nodeList: [
              { target_code: '001', axisScale: [0, 0], moveScale: [0, 0] },
              { target_code: '002', axisScale: [0, 0], moveScale: [0, 0] },
              { target_code: '003', axisScale: [0, 0], moveScale: [0, 0] },
              { target_code: '004', axisScale: [0, 0], moveScale: [0, 0] },
              { target_code: '005', data_logger_index: 1, axisScale: [0, 0], moveScale: [0, -1] },
              { target_code: '006', axisScale: [0, 0], moveScale: [0, -1] },
              { target_code: '007', axisScale: [0, 0], moveScale: [0, 0] },
            ],
          },
          {
            target_id: 'brineTemperature',
            target_prefix: 'BT',
            target_name: '염수 온도',
            description: null,
            nodeList: [
              { target_code: '001', axisScale: [0, 0], moveScale: [0, 0] },
              { target_code: '002', axisScale: [0, 0], moveScale: [0, 0] },
              { target_code: '003', axisScale: [0, 0], moveScale: [0, 0] },
              { target_code: '004', axisScale: [0, 0], moveScale: [0, 0] },
              { target_code: '005', axisScale: [0, 0], moveScale: [0, 0] },
            ],
          },
        ],
      },
      {
        target_id: 'salinity',
        target_name: '염도',
        is_sensor: 1,
        data_unit: '%',
        description: null,
        defList: [
          {
            target_id: 'salinity',
            target_prefix: 'S',
            target_name: '염도',
            description: null,
            nodeList: [
              { target_code: '001', axisScale: [0, 0], moveScale: [0, -1] },
              { target_code: '002', axisScale: [0, 0], moveScale: [0, -1] },
              { target_code: '003', axisScale: [0, 0], moveScale: [0, -1] },
            ],
          },
        ],
      },
      {
        target_id: 'waterLevel',
        target_name: '수위',
        is_sensor: 1,
        data_unit: 'cm',
        description: null,
        defList: [
          {
            target_id: 'waterLevel',
            target_prefix: 'WL',
            target_name: '수위',
            description: null,
            nodeList: [
              { target_code: '001', axisScale: [0, 0], moveScale: [0, 0] },
              { target_code: '002', axisScale: [0, 0], moveScale: [0, 0] },
              { target_code: '003', axisScale: [0, 0], moveScale: [0, 0] },
              { target_code: '004', axisScale: [0, 0], moveScale: [0, 0] },
              { target_code: '005', axisScale: [0, 0], moveScale: [0, 0] },
            ],
          },
        ],
      },
      {
        target_id: 'waterDoor',
        target_name: '수문',
        is_sensor: 0,
        data_unit: null,
        description: null,
        defList: [
          {
            target_id: 'waterDoor',
            target_prefix: 'WD',
            target_name: '수문',
            description: null,
            nodeList: [
              { target_code: '005', axisScale: [1, 1], moveScale: [0, 0] },
              { target_code: '006', axisScale: [0, 1], moveScale: [0, 0.8] },
              { target_code: '007', axisScale: [0, 1], moveScale: [0, 0.8] },
              { target_code: '008', axisScale: [1, 1], moveScale: [0, 0] },
              { target_code: '009', axisScale: [1, 1], moveScale: [0, 0] },
              { target_code: '010', axisScale: [0, 1], moveScale: [1, 0] },
              { target_code: '011', axisScale: [0, 1], moveScale: [1, 0] },
              { target_code: '012', axisScale: [0, 1], moveScale: [1, 0] },
              { target_code: '013', axisScale: [0, 1], moveScale: [0, 0] },
              { target_code: '014', axisScale: [0, 1], moveScale: [0, 0] },
              { target_code: '015', axisScale: [1, 0], moveScale: [0, 1] },
              {
                target_code: '016',
                data_logger_index: 0,
                axisScale: [1, 0],
                moveScale: [0, -0.05],
              },
            ],
          },
        ],
      },
      {
        target_id: 'valve',
        target_name: '밸브',
        is_sensor: 0,
        data_unit: null,
        description: null,
        defList: [
          {
            target_id: 'valve',
            target_prefix: 'V',
            target_name: '밸브',
            description: null,
            nodeList: [
              { target_code: '001', axisScale: [0, 0], moveScale: [0, 0] },
              { target_code: '002', axisScale: [0, 1], moveScale: [0, 0] },
              { target_code: '003', axisScale: [0, 0], moveScale: [0, 0] },
              { target_code: '004', axisScale: [0, 1], moveScale: [0, 0] },
              { target_code: '006', axisScale: [0, 0], moveScale: [0, -0.5] },
              { target_code: '007', axisScale: [0, 0], moveScale: [0, -0.5] },
            ],
          },
          {
            target_id: 'gateValve',
            target_prefix: 'GV',
            target_name: '수문 용 밸브',
            description: null,
            nodeList: [
              { target_code: '001', axisScale: [1, 1], moveScale: [0, -0.8] },
              { target_code: '002', axisScale: [1, 1], moveScale: [0, -0.8] },
              { target_code: '003', axisScale: [1, 1], moveScale: [0, -0.8] },
              { target_code: '004', axisScale: [1, 1], moveScale: [0, -0.8] },
              { target_code: '005', axisScale: [0.5, 1], moveScale: [0, 0] },
            ],
          },
        ],
      },
      {
        target_id: 'pump',
        target_name: '펌프',
        is_sensor: 0,
        data_unit: null,
        description: null,
        defList: [
          {
            target_id: 'pump',
            target_prefix: 'P',
            target_name: '펌프',
            description: null,
            nodeList: [
              { target_code: '001', axisScale: [1, 0], moveScale: [0, 0] },
              { target_code: '002', axisScale: [0, 0], moveScale: [0, 0] },
              { target_code: '003', axisScale: [0, 0], moveScale: [0, 0] },
              { target_code: '004', axisScale: [1, 0], moveScale: [0, 0] },
              { target_code: '005', axisScale: [1, 0], moveScale: [0, 0] },
              { target_code: '006', axisScale: [1, 1], moveScale: [0, 0] },
            ],
          },
        ],
      },
      {
        target_id: 'outlet',
        target_name: '배출구',
        is_sensor: -1,
        save_db_type: NONE,
        data_unit: null,
        description: null,
        defList: [
          {
            target_id: 'outlet',
            target_prefix: 'O',
            target_name: '배출구',
            description: null,
            nodeList: [
              {
                target_code: '001',
                data_logger_index: 0,
                axisScale: [0, 0],
                moveScale: [0.8, 2.7],
              },
              {
                target_code: '002',
                data_logger_index: 0,
                axisScale: [0, 1],
                moveScale: [0.8, -2.7],
              },
              {
                target_code: '003',
                data_logger_index: 0,
                axisScale: [0, 0],
                moveScale: [0.8, 2.7],
              },
              {
                target_code: '004',
                data_logger_index: 0,
                axisScale: [0, 1],
                moveScale: [0.8, -2.7],
              },
              { target_code: '005', axisScale: [1, 0], moveScale: [-2.2, 0] },
              { target_code: '006', axisScale: [1, 0], moveScale: [0, 0] },
              { target_code: '007', axisScale: [1, 0], moveScale: [0, 0] },
              { target_code: '008', axisScale: [0, 0], moveScale: [2, 0] },
            ],
          },
        ],
      },
      {
        target_id: 'groundRelay',
        target_name: '지락 계전기',
        is_sensor: 1,
        defList: [
          {
            target_id: 'isConnectorGroundRelay',
            target_prefix: 'CGR',
            target_name: '접속반 지락 계전기',
            nodeList: [
              {
                target_code: '001',
                data_logger_index: 0,
              },
              {
                target_code: '002',
                data_logger_index: 1,
              },
            ],
          },
        ],
      },
    ],
  },
  relationInfo: {
    placeRelationList: [
      {
        target_id: 'connector',
        target_name: '접속반',
        description: '접속반을 설치한 공간',
        defList: [
          {
            target_id: 'rightConnector',
            target_prefix: 'R_CNT',
            target_name: '오른쪽 접속반',
            placeList: [
              {
                target_code: '001',
                target_name: '육상 G2G 다결정(1채널)',
                nodeList: ['CNT_V_001', 'CNT_A_001'],
              },
              {
                target_code: '002',
                target_name: '육상 일반 다결정(2채널)',
                nodeList: ['CNT_V_002', 'CNT_A_002'],
              },
              {
                target_code: '003',
                target_name: '수중 G2G 개선형 단결정(3채널)',
                nodeList: ['CNT_V_007', 'CNT_A_007'],
              },
            ],
          },
          {
            target_id: 'leftConnector',
            target_prefix: 'L_CNT',
            target_name: '왼쪽 접속반',
            placeList: [
              {
                target_code: '001',
                target_name: '수중 G2G 다결정(1채널)',
                nodeList: ['CNT_V_003', 'CNT_A_003'],
              },
              {
                target_code: '002',
                target_name: '수중 일반 다결정(2채널)',
                nodeList: ['CNT_V_004', 'CNT_A_004'],
              },
              {
                target_code: '003',
                target_name: '수중 G2G 단결정(3채널)',
                nodeList: ['CNT_V_005', 'CNT_A_005'],
              },
              {
                target_code: '004',
                target_name: '수중 일반 단결정(4채널)',
                nodeList: ['CNT_V_006', 'CNT_A_006'],
              },
            ],
          },
        ],
      },
      {
        target_id: 'earth',
        target_name: '육상',
        description: null,
        defList: [
          {
            target_id: 'earth',
            target_name: '육상',
            target_prefix: 'EA',
            placeList: [
              { target_code: '일반', nodeList: ['MRT_006'] },
              { target_code: 'G2G', nodeList: ['MRT_005'] },
            ],
          },
        ],
      },
      {
        target_id: 'salternBlock',
        target_name: '염판',
        description: null,
        defList: [
          {
            target_id: 'solarEvaporationBlock',
            target_prefix: 'SEB',
            target_name: '수중 태양광 발전 증발지',
            placeList: [
              {
                target_code: '1_A',
                nodeList: ['GV_001', 'WL_001', 'V_001', 'MRT_001', 'O_001', 'BT_001'],
                depth: 5,
                place_info: {
                  thresholdConfigList: [
                    {
                      ndId: 'waterLevel',
                      maxValue: 10,
                      upperLimitValue: 4,
                      setValue: 3,
                      lowerLimitValue: 2,
                      minValue: 1,
                      callPlaceRankList: ['BW_1', 'RV_1'],
                      putPlaceRankList: ['BW_1', 'BW_2'],
                    },
                    {
                      ndId: 'salinity',
                      upperLimitValue: 5,
                      putPlaceRankList: ['BW_2', 'BW_1'],
                    },
                    {
                      ndId: 'brineTemperature',
                      upperLimitValue: 40,
                      putPlaceRankList: ['BW_1'],
                    },
                  ],
                  placeSize: { width: 300, height: 320, depth: 20 },
                },
              },
              {
                target_code: '1_B',
                nodeList: ['GV_002', 'WL_002', 'V_002', 'MRT_002', 'O_002', 'BT_002'],
                depth: 5,
                place_info: {
                  thresholdConfigList: [
                    {
                      ndId: 'waterLevel',
                      maxValue: 10,
                      upperLimitValue: 4,
                      setValue: 3,
                      lowerLimitValue: 2,
                      minValue: 1,
                      callPlaceRankList: ['BW_1', 'RV_1'],
                      putPlaceRankList: ['BW_1', 'BW_2'],
                    },
                    {
                      ndId: 'salinity',
                      upperLimitValue: 5,
                      putPlaceRankList: ['BW_2', 'BW_1'],
                    },
                    {
                      ndId: 'brineTemperature',
                      upperLimitValue: 40,
                      putPlaceRankList: ['BW_1'],
                    },
                  ],
                  placeSize: { width: 300, height: 320, depth: 20 },
                },
              },
              {
                target_code: '1_C',
                nodeList: ['GV_003', 'WL_003', 'V_003', 'MRT_003', 'O_003', 'BT_003'],
                depth: 5,
                place_info: {
                  thresholdConfigList: [
                    {
                      ndId: 'waterLevel',
                      maxValue: 10,
                      upperLimitValue: 4,
                      setValue: 3,
                      lowerLimitValue: 2,
                      minValue: 1,
                      callPlaceRankList: ['BW_1', 'RV_1'],
                      putPlaceRankList: ['BW_1', 'BW_2'],
                    },
                    {
                      ndId: 'salinity',
                      upperLimitValue: 5,
                      putPlaceRankList: ['BW_2', 'BW_1'],
                    },
                    {
                      ndId: 'brineTemperature',
                      upperLimitValue: 40,
                      putPlaceRankList: ['BW_1'],
                    },
                  ],
                  placeSize: { width: 300, height: 320, depth: 20 },
                },
              },
              {
                target_code: '1_D',
                nodeList: ['GV_004', 'WL_004', 'V_004', 'MRT_004', 'O_004', 'BT_004'],
                depth: 5,
                place_info: {
                  thresholdConfigList: [
                    {
                      ndId: 'waterLevel',
                      maxValue: 10,
                      upperLimitValue: 4,
                      setValue: 3,
                      lowerLimitValue: 2,
                      minValue: 1,
                      callPlaceRankList: ['BW_1', 'RV_1'],
                      putPlaceRankList: ['BW_1', 'BW_2'],
                    },
                    {
                      ndId: 'salinity',
                      upperLimitValue: 5,
                      putPlaceRankList: ['BW_2', 'BW_1'],
                    },
                    {
                      ndId: 'brineTemperature',
                      upperLimitValue: 40,
                      putPlaceRankList: ['BW_1'],
                    },
                  ],
                  placeSize: { width: 300, height: 320, depth: 20 },
                },
              },
              {
                target_code: '1_E',
                nodeList: ['GV_005', 'O_008', 'WL_005', 'MRT_007', 'BT_005'],
                depth: 5,
                place_info: {
                  thresholdConfigList: [
                    {
                      ndId: 'waterLevel',
                      maxValue: 10,
                      upperLimitValue: 4,
                      setValue: 3,
                      lowerLimitValue: 2,
                      minValue: 1,
                      callPlaceRankList: ['RV_1'],
                      putPlaceRankList: ['SEA'],
                    },
                  ],
                  placeSize: { width: 300, height: 320, depth: 20 },
                },
              },
            ],
          },
          {
            target_id: 'normalEvaporationBlock',
            target_prefix: 'NEB',
            target_name: '일반 증발지',
            placeList: [
              {
                target_code: '일반',
                nodeList: ['WD_005'],
                depth: 5,
              },
              {
                target_code: '2',
                nodeList: ['WD_006', 'O_005'],
                depth: 4,
                place_info: {
                  thresholdConfigList: [
                    {
                      ndId: 'waterLevel',
                      maxValue: 10,
                      upperLimitValue: 9,
                      setValue: 7,
                      lowerLimitValue: 5,
                      minValue: 1,
                      callPlaceRankList: ['BW_2'],
                      putPlaceRankList: ['NEB_3'],
                    },
                  ],
                  placeSize: { width: 300, height: 320, depth: 20 },
                },
              },
              {
                target_code: '3',
                nodeList: ['WD_006', 'WD_007'],
                depth: 3,
                place_info: {
                  thresholdConfigList: [
                    {
                      ndId: 'waterLevel',
                      maxValue: 10,
                      upperLimitValue: 9,
                      setValue: 7,
                      lowerLimitValue: 5,
                      minValue: 1,
                      callPlaceRankList: ['NEB_2'],
                      putPlaceRankList: ['NEB_4'],
                    },
                  ],
                  placeSize: { width: 300, height: 320, depth: 20 },
                },
              },
              {
                target_code: '4',
                nodeList: ['WD_007', 'WD_008'],
                depth: 2,
                place_info: {
                  thresholdConfigList: [
                    {
                      ndId: 'waterLevel',
                      maxValue: 10,
                      upperLimitValue: 9,
                      setValue: 7,
                      lowerLimitValue: 5,
                      minValue: 1,
                      callPlaceRankList: ['NEB_3'],
                      putPlaceRankList: ['BW_2'],
                    },
                    {
                      ndId: 'salinity',
                      upperLimitValue: 15,
                      putPlaceRankList: ['BW_3', 'BW_2'],
                    },
                  ],
                  placeSize: { width: 300, height: 320, depth: 20 },
                },
              },
            ],
          },
          {
            target_id: 'normalCrystalizingBlock',
            target_prefix: 'NCB',
            target_name: '일반 결정지',
            placeList: [
              {
                target_code: '',
                nodeList: ['WD_009', 'O_006'],
                depth: 1,
                place_info: {
                  thresholdConfigList: [
                    {
                      ndId: 'waterLevel',
                      maxValue: 10,
                      upperLimitValue: 9,
                      setValue: 5,
                      lowerLimitValue: 5,
                      minValue: 1,
                      callPlaceRankList: ['BW_3'],
                      putPlaceRankList: ['BW_3', 'BW_2'],
                    },
                    {
                      ndId: 'salinity',
                      upperLimitValue: 25,
                      callPlaceRankList: ['BW_4'],
                    },
                  ],
                  placeSize: { width: 300, height: 320, depth: 20 },
                },
              },
            ],
          },
        ],
      },
      {
        target_id: 'brineWarehouse',
        target_name: '해주',
        description: null,
        defList: [
          {
            target_id: 'brineWarehouse',
            target_prefix: 'BW',
            target_name: '해주',
            placeList: [
              {
                target_code: '1',
                nodeList: ['WD_010', 'S_001', 'P_003'],
                depth: -1,
                place_info: {
                  thresholdConfigList: [
                    {
                      ndId: 'waterLevel',
                      maxValue: 100,
                      lowerLimitValue: 30,
                      minValue: 10,
                      callPlaceRankList: ['SEB_1_A', 'SEB_1_B', 'SEB_1_C', 'SEB_1_D'],
                    },
                  ],
                  placeSize: { width: 300, height: 320, depth: 20 },
                },
              },
              {
                target_code: '2',
                nodeList: ['WD_011', 'S_002', 'P_004'],
                depth: -1,
                place_info: {
                  thresholdConfigList: [
                    {
                      ndId: 'waterLevel',
                      maxValue: 100,
                      lowerLimitValue: 30,
                      minValue: 10,
                      callPlaceRankList: ['SEB_1_A', 'SEB_1_B', 'SEB_1_C', 'SEB_1_D', 'NEB_4'],
                    },
                  ],
                  placeSize: { width: 300, height: 320, depth: 20 },
                },
              },
              {
                target_code: '3',
                nodeList: ['WD_012', 'S_003', 'P_005'],
                depth: -1,
                place_info: {
                  thresholdConfigList: [
                    {
                      ndId: 'waterLevel',
                      maxValue: 100,
                      lowerLimitValue: 30,
                      minValue: 10,
                      callPlaceRankList: ['NEB_4'],
                    },
                  ],
                  placeSize: { width: 300, height: 320, depth: 20 },
                },
              },
            ],
          },
        ],
      },
      {
        target_id: 'reservoir',
        target_name: '저수조',
        description: null,
        defList: [
          {
            target_id: 'reservoir',
            target_prefix: 'RV',
            target_name: '저수조',
            placeList: [
              {
                target_code: '',
                nodeList: ['P_002', 'P_006', 'O_007'],
                depth: -1,
                place_info: {
                  thresholdConfigList: [
                    {
                      ndId: 'waterLevel',
                      maxValue: 100,
                      lowerLimitValue: 30,
                      minValue: 10,
                      callPlaceRankList: ['SEA'],
                    },
                  ],
                  placeSize: { width: 300, height: 320, depth: 20 },
                },
              },
            ],
          },
        ],
      },
      {
        target_id: 'sea',
        target_name: '바다',
        description: null,
        defList: [
          {
            target_id: 'sea',
            target_prefix: 'SEA',
            target_name: '바다',
            placeList: [
              {
                target_code: '',
                depth: -1,
                nodeList: ['P_001'],
                place_info: {
                  placeSize: { width: 1300, height: 1320, depth: 120 },
                },
              },
            ],
          },
        ],
      },
      {
        target_id: 'waterWay',
        target_name: '수로',
        description: null,
        defList: [
          {
            target_id: 'waterWay',
            target_prefix: 'WW',
            target_name: '수로',
            placeList: [
              {
                target_code: '001',
                nodeList: ['GV_001', 'GV_002', 'GV_003', 'GV_004', 'WD_013'],
                depth: 0.4,
              },
              {
                target_code: '002',
                nodeList: ['WD_005', 'WD_010', 'WD_013', 'WD_016'],
                depth: 0.3,
              },
              { target_code: '003', depth: 0.3, nodeList: ['WD_008', 'WD_009', 'WD_014'] },
              {
                target_code: '004',
                nodeList: ['WD_011', 'WD_012', 'WD_014', 'WD_015', 'WD_016'],
                depth: 0.2,
              },
              { target_code: '005', depth: 0.1, nodeList: ['WD_015'] },
              { target_code: '006', depth: 0.4, nodeList: ['GV_005'] },
              { target_code: '007', depth: 0.3, nodeList: [] },
            ],
          },
        ],
      },
      {
        target_id: 'pipeLine',
        target_name: '파이프',
        description: null,
        defList: [
          {
            target_id: 'pipeLine',
            target_prefix: 'PL',
            target_name: '파이프',
            placeList: [
              { target_code: '001', nodeList: [] },
              { target_code: '002', nodeList: [] },
              { target_code: '003', nodeList: ['V_006'] },
              { target_code: '004', nodeList: ['V_007'] },
              { target_code: '005', nodeList: [] },
              { target_code: '006', nodeList: [] },
              { target_code: '007', nodeList: [] },
              { target_code: '008', nodeList: [] },
              { target_code: '009', nodeList: [] },
              { target_code: '010', nodeList: [] },
              { target_code: '011', nodeList: [] },
              { target_code: '012', nodeList: [] },
              { target_code: '013', nodeList: [] },
              { target_code: '014', nodeList: [] },
              { target_code: '015', nodeList: [] },
              { target_code: '016', nodeList: [] },
              { target_code: '017', nodeList: [] },
              { target_code: '018', nodeList: [] },
            ],
          },
        ],
      },
    ],
    smartSalternInfo: {
      pipeConnectionRelationList: [
        { currNode: 'P_001', parentNodes: [], childNodes: ['O_007'] },
        { currNode: 'P_002', parentNodes: [], childNodes: ['V_006'] },
        { currNode: 'P_003', parentNodes: [], childNodes: ['V_007'] },
        { currNode: 'P_004', parentNodes: [], childNodes: ['O_005'] },
        { currNode: 'P_005', parentNodes: [], childNodes: ['O_006'] },
        {
          currNode: 'V_006',
          parentNodes: ['P_002'],
          childNodes: ['V_001', 'V_002', 'V_003', 'V_004', 'V_007'],
        },
        {
          currNode: 'V_007',
          parentNodes: ['P_003'],
          childNodes: ['V_001', 'V_002', 'V_003', 'V_004', 'V_006'],
        },
        { currNode: 'V_001', parentNodes: ['V_006', 'V_007'], childNodes: ['O_001'] },
        { currNode: 'V_002', parentNodes: ['V_006', 'V_007'], childNodes: ['O_002'] },
        { currNode: 'V_003', parentNodes: ['V_006', 'V_007'], childNodes: ['O_003'] },
        { currNode: 'V_004', parentNodes: ['V_006', 'V_007'], childNodes: ['O_004'] },
      ],
    },
    svgResourceConnectionList: [
      {
        targetIdList: ['SEB_1_A', 'SEB_1_B', 'SEB_1_C', 'SEB_1_D'],
        resourceIdList: ['salternModuleBlock_A'],
      },
      { targetIdList: ['NEB_일반'], resourceIdList: ['salternNomalBlock_A'] },
      { targetIdList: ['NEB_2', 'NEB_3', 'NEB_4'], resourceIdList: ['salternNomalBlock_B'] },
      { targetIdList: ['SEB_1_E'], resourceIdList: ['salternModuleBlock_B'] },
      { targetIdList: ['NCB'], resourceIdList: ['salternCrystalBlock'] },
      { targetIdList: ['EA_일반', 'EA_G2G'], resourceIdList: ['earth'] },
      { targetIdList: ['BW_1', 'BW_2', 'BW_3'], resourceIdList: ['brineWarehouse'] },
      { targetIdList: ['RV'], resourceIdList: ['reservoir'] },
      { targetIdList: ['SEA'], resourceIdList: ['sea'] },
      {
        targetIdList: [
          'WD_005',
          'WD_006',
          'WD_007',
          'WD_008',
          'WD_009',
          'WD_010',
          'WD_011',
          'WD_012',
          'WD_013',
          'WD_014',
          'WD_015',
          'WD_016',
        ],
        resourceIdList: ['waterDoor'],
      },
      {
        targetIdList: ['GV_001', 'GV_002', 'GV_003', 'GV_004', 'GV_005'],
        resourceIdList: ['gateValve'],
      },
      {
        targetIdList: ['P_001', 'P_002', 'P_003', 'P_004', 'P_005', 'P_006'],
        resourceIdList: ['pump'],
      },
      {
        targetIdList: ['V_001', 'V_002', 'V_003', 'V_004', 'V_006', 'V_007'],
        resourceIdList: ['valve'],
      },
      {
        targetIdList: ['O_001', 'O_002', 'O_003', 'O_004', 'O_005', 'O_006', 'O_007', 'O_008'],
        resourceIdList: ['outlet'],
      },
      {
        targetIdList: ['WW_001', 'WW_002', 'WW_003', 'WW_004', 'WW_005', 'WW_006', 'WW_007'],
        resourceIdList: ['waterWay'],
      },
      {
        targetIdList: [
          'PL_001',
          'PL_002',
          'PL_003',
          'PL_004',
          'PL_005',
          'PL_006',
          'PL_007',
          'PL_008',
          'PL_009',
          'PL_010',
          'PL_011',
          'PL_012',
          'PL_013',
          'PL_014',
          'PL_015',
          'PL_016',
          'PL_017',
          'PL_018',
          'PL_019',
          'PL_020',
        ],
        resourceIdList: ['pipeLine'],
      },
      {
        targetIdList: ['MRT_001', 'MRT_002', 'MRT_003', 'MRT_004', 'MRT_005', 'MRT_006', 'MRT_007'],
        resourceIdList: ['moduleRearTemperature'],
      },
      {
        targetIdList: ['WL_001', 'WL_002', 'WL_003', 'WL_004', 'WL_005'],
        resourceIdList: ['waterLevel'],
      },
      {
        targetIdList: ['BT_001', 'BT_002', 'BT_003', 'BT_004', 'BT_005'],
        resourceIdList: ['brineTemperature'],
      },
      { targetIdList: ['S_001', 'S_002', 'S_003'], resourceIdList: ['salinity'] },
    ],
    hiddenTextSvgModelResourceIdList: ['pipeLine', 'waterWay'],
  },
  controlInfo: {
    flowCmdList: [
      {
        srcPlaceId: 'SEB_1_A',
        destList: [
          {
            destPlaceId: 'BW_1',
            trueNodeList: ['GV_001', 'WD_013', 'WD_010'],
            falseNodeList: ['WD_016'],
          },
          {
            destPlaceId: 'BW_2',
            trueNodeList: ['GV_001', 'WD_013', 'WD_011', 'WD_016'],
            falseNodeList: ['WD_010', 'WD_012', 'WD_014', 'WD_015'],
          },
          {
            destPlaceId: 'SEA',
            trueNodeList: ['GV_001', 'WD_013', 'WD_016', 'WD_015'],
            falseNodeList: ['WD_010', 'WD_011', 'WD_014', 'WD_012'],
          },
        ],
      },
      {
        srcPlaceId: 'SEB_1_B',
        destList: [
          {
            destPlaceId: 'BW_1',
            trueNodeList: ['GV_002', 'WD_013', 'WD_010'],
            falseNodeList: ['WD_016'],
          },
          {
            destPlaceId: 'BW_2',
            trueNodeList: ['GV_002', 'WD_013', 'WD_011', 'WD_016'],
            falseNodeList: ['WD_010', 'WD_012', 'WD_014', 'WD_015'],
          },
          {
            destPlaceId: 'SEA',
            trueNodeList: ['GV_002', 'WD_013', 'WD_016', 'WD_015'],
            falseNodeList: ['WD_010', 'WD_011', 'WD_014', 'WD_012'],
          },
        ],
      },
      {
        srcPlaceId: 'SEB_1_C',
        destList: [
          {
            destPlaceId: 'BW_1',
            trueNodeList: ['GV_003', 'WD_013', 'WD_010'],
            falseNodeList: ['WD_016'],
          },
          {
            destPlaceId: 'BW_2',
            trueNodeList: ['GV_003', 'WD_013', 'WD_011', 'WD_016'],
            falseNodeList: ['WD_010', 'WD_012', 'WD_014', 'WD_015'],
          },
          {
            destPlaceId: 'SEA',
            trueNodeList: ['GV_003', 'WD_013', 'WD_016', 'WD_015'],
            falseNodeList: ['WD_010', 'WD_011', 'WD_014', 'WD_012'],
          },
        ],
      },
      {
        srcPlaceId: 'SEB_1_D',
        destList: [
          {
            destPlaceId: 'BW_1',
            trueNodeList: ['GV_004', 'WD_013', 'WD_010'],
            falseNodeList: ['WD_016'],
          },
          {
            destPlaceId: 'BW_2',
            trueNodeList: ['GV_004', 'WD_013', 'WD_011', 'WD_016'],
            falseNodeList: ['WD_010', 'WD_012', 'WD_014', 'WD_015'],
          },
          {
            destPlaceId: 'SEA',
            trueNodeList: ['GV_004', 'WD_013', 'WD_016', 'WD_015'],
            falseNodeList: ['WD_010', 'WD_011', 'WD_014', 'WD_012'],
          },
        ],
      },
      {
        srcPlaceId: 'NEB_2',
        destList: [
          {
            destPlaceId: 'NEB_3',
            trueNodeList: ['WD_006'],
            falseNodeList: ['WD_007'],
          },
        ],
      },
      {
        srcPlaceId: 'NEB_3',
        destList: [
          {
            destPlaceId: 'NEB_4',
            trueNodeList: ['WD_007'],
            falseNodeList: ['WD_008'],
          },
        ],
      },
      {
        srcPlaceId: 'NEB_4',
        destList: [
          {
            destPlaceId: 'BW_2',
            trueNodeList: ['WD_008', 'WD_014', 'WD_011'],
            falseNodeList: ['WD_009', 'WD_012', 'WD_015'],
          },
          {
            destPlaceId: 'BW_3',
            trueNodeList: ['WD_008', 'WD_014', 'WD_012'],
            falseNodeList: ['WD_009', 'WD_011', 'WD_015'],
          },
          {
            destPlaceId: 'SEA',
            trueNodeList: ['WD_008', 'WD_014', 'WD_015'],
            falseNodeList: ['WD_009', 'WD_011', 'WD_012'],
          },
        ],
      },
      {
        srcPlaceId: 'NCB',
        destList: [
          {
            destPlaceId: 'BW_3',
            trueNodeList: ['WD_009', 'WD_014', 'WD_012'],
            falseNodeList: ['WD_008', 'WD_011', 'WD_015'],
          },
          {
            destPlaceId: 'SEA',
            trueNodeList: ['WD_009', 'WD_014', 'WD_015'],
            falseNodeList: ['WD_008', 'WD_011', 'WD_012'],
          },
        ],
      },
      {
        srcPlaceId: 'SEA',
        destList: [
          {
            destPlaceId: 'RV',
            trueNodeList: ['P_001'],
            falseNodeList: [],
          },
        ],
      },
      {
        srcPlaceId: 'RV',
        destList: [
          {
            destPlaceId: 'SEB_1_A',
            trueNodeList: ['V_006', 'V_001', 'P_002'],
            falseNodeList: [
              // 'V_002', 'V_003', 'V_004',
              'GV_001',
            ],
          },
          {
            destPlaceId: 'SEB_1_B',
            trueNodeList: ['V_006', 'V_002', 'P_002'],
            falseNodeList: [
              // 'V_001', 'V_003', 'V_004',
              'GV_002',
            ],
          },
          {
            destPlaceId: 'SEB_1_C',
            trueNodeList: ['V_006', 'V_003', 'P_002'],
            falseNodeList: [
              // 'V_001', 'V_002', 'V_004',
              'GV_003',
            ],
          },
          {
            destPlaceId: 'SEB_1_D',
            trueNodeList: ['V_006', 'V_004', 'P_002'],
            falseNodeList: [
              // 'V_001', 'V_002', 'V_003',
              'GV_004',
            ],
          },
        ],
      },
      {
        srcPlaceId: 'BW_1',
        destList: [
          {
            destPlaceId: 'SEB_1_A',
            trueNodeList: ['V_007', 'V_001', 'P_003'],
            falseNodeList: [
              // 'V_002', 'V_003', 'V_004',
              'GV_001',
            ],
          },
          {
            destPlaceId: 'SEB_1_B',
            trueNodeList: ['V_007', 'V_002', 'P_003'],
            falseNodeList: [
              // 'V_001', 'V_003', 'V_004',
              'GV_002',
            ],
          },
          {
            destPlaceId: 'SEB_1_C',
            trueNodeList: ['V_007', 'V_003', 'P_003'],
            falseNodeList: [
              // 'V_001', 'V_002', 'V_004',
              'GV_003',
            ],
          },
          {
            destPlaceId: 'SEB_1_D',
            trueNodeList: ['V_007', 'V_004', 'P_003'],
            falseNodeList: [
              // 'V_001', 'V_002', 'V_003',
              'GV_004',
            ],
          },
        ],
      },
      {
        srcPlaceId: 'BW_2',
        destList: [
          {
            destPlaceId: 'NEB_2',
            trueNodeList: ['P_004'],
            falseNodeList: ['WD_008'],
          },
        ],
      },
      {
        srcPlaceId: 'BW_3',
        destList: [
          {
            destPlaceId: 'NEB_2',
            trueNodeList: ['P_005'],
            falseNodeList: ['WD_009'],
          },
        ],
      },
    ],
    setCmdList: [
      {
        cmdId: 'closeAllDevice',
        trueNodeList: [],
        falseNodeList: [
          'GV_001',
          'GV_002',
          'GV_003',
          'GV_004',
          'GV_005',
          'P_001',
          'P_002',
          'P_003',
          'P_004',
          'P_005',
          'P_006',
          'V_001',
          'V_002',
          'V_003',
          'V_004',
          'V_006',
          'V_007',
          'WD_005',
          'WD_006',
          'WD_007',
          'WD_008',
          'WD_009',
          'WD_010',
          'WD_011',
          'WD_012',
          'WD_013',
          'WD_014',
          'WD_015',
          'WD_016',
        ],
      },
    ],
    tempControlList: [
      { cmdName: '바다 → 저수지', trueList: ['P_001'], falseList: [] },
      { cmdName: '저수조 → 증발지 1_E', trueList: ['P_006'], falseList: ['GV_005'] },
      {
        cmdName: '저수조 → 증발지 1',
        trueList: ['V_006', 'V_001', 'V_002', 'V_003', 'V_004', 'P_002'],
        falseList: ['GV_001', 'GV_002', 'GV_003', 'GV_004', 'WD_005'],
      },
      {
        cmdName: '해주 1 → 증발지 1',
        trueList: ['V_007', 'V_001', 'V_002', 'V_003', 'V_004', 'P_003'],
        falseList: ['GV_001', 'GV_002', 'GV_003', 'GV_004', 'WD_005'],
      },
      { cmdName: '해주 2 → 증발지 2', trueList: ['P_004'], falseList: ['WD_006'] },
      {
        cmdName: '해주 2 → 증발지 2, 3, 4',
        trueList: ['P_004', 'WD_006', 'WD_007'],
        falseList: ['WD_008'],
      },
      { cmdName: '해주 3 → 결정지', trueList: ['P_005'], falseList: ['WD_009'] },
      {
        cmdName: '증발지 1 → 해주 1',
        trueList: ['GV_001', 'GV_002', 'GV_003', 'GV_004', 'WD_005', 'WD_013', 'WD_010'],
        falseList: ['WD_016'],
      },
      {
        cmdName: '증발지 1 → 해주 2',
        trueList: ['GV_001', 'GV_002', 'GV_003', 'GV_004', 'WD_005', 'WD_013', 'WD_016', 'WD_011'],
        falseList: ['WD_010', 'WD_012', 'WD_014', 'WD_015'],
      },
      { cmdName: '증발지 2 → 증발지 3', trueList: ['WD_006'], falseList: ['WD_007'] },
      { cmdName: '증발지 3 → 증발지 4', trueList: ['WD_007'], falseList: ['WD_008'] },
      {
        cmdName: '증발지 4 → 해주2',
        trueList: ['WD_008', 'WD_014', 'WD_011'],
        falseList: ['WD_012', 'WD_015'],
      },
      {
        cmdName: '증발지 4 → 해주3',
        trueList: ['WD_008', 'WD_014', 'WD_012'],
        falseList: ['WD_011', 'WD_015'],
      },
      {
        cmdName: '결정지 → 해주 3',
        trueList: ['WD_009', 'WD_014', 'WD_012'],
        falseList: ['WD_011'],
      },
      {
        cmdName: '저수조 → 증발지 1A',
        trueList: ['V_006', 'V_001', 'P_002'],
        falseList: ['GV_001'],
      },
      {
        cmdName: '저수조 → 증발지 1B',
        trueList: ['V_006', 'V_002', 'P_002'],
        falseList: ['GV_002'],
      },
      {
        cmdName: '저수조 → 증발지 1C',
        trueList: ['V_006', 'V_003', 'P_002'],
        falseList: ['GV_003'],
      },
      {
        cmdName: '저수조 → 증발지 1D',
        trueList: ['V_006', 'V_004', 'P_002'],
        falseList: ['GV_004'],
      },
      {
        cmdName: '해주 1 → 증발지 1A',
        trueList: ['V_007', 'V_001', 'P_003'],
        falseList: ['GV_001'],
      },
      {
        cmdName: '해주 1 → 증발지 1B',
        trueList: ['V_007', 'V_002', 'P_003'],
        falseList: ['GV_002'],
      },
      {
        cmdName: '해주 1 → 증발지 1C',
        trueList: ['V_007', 'V_003', 'P_003'],
        falseList: ['GV_003'],
      },
      {
        cmdName: '해주 1 → 증발지 1D',
        trueList: ['V_007', 'V_004', 'P_003'],
        falseList: ['GV_004'],
      },
      { cmdName: '증발지 1A → 해주 1', trueList: ['GV_001', 'WD_013', 'WD_010'], falseList: [] },
      { cmdName: '증발지 1B → 해주 1', trueList: ['GV_002', 'WD_013', 'WD_010'], falseList: [] },
      { cmdName: '증발지 1C → 해주 1', trueList: ['GV_003', 'WD_013', 'WD_010'], falseList: [] },
      { cmdName: '증발지 1D → 해주 1', trueList: ['GV_004', 'WD_013', 'WD_010'], falseList: [] },
    ],
  },
};

module.exports = map;
