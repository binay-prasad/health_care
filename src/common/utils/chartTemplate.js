export function chartTemplate(type) {
  const _commonOption = {
    commonOption: {
      chart: {
        height: '300px'
      },
      title: {
        text: '',
        align: 'left'
      },
      xAxis: {
        categories: ['Not ready', 'admitted', 'open', 'admitted', 'hold', 'wait', 'registerd'],
        labels: {
          enabled: false
        }
      },
      yAxis: {
        title: {
          text: 'Bed Count'
        }
      },
      legend: {
        enabled: true,
        symbolRadius: 0
      },
      series: []
    },
    column: {
      chart: {
        type: 'column'
      }
    }
  }
  return { ..._commonOption['commonOption'], ..._commonOption[type] };
};