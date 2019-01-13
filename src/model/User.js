import Model from 'js-model';

const User = new Model({
  id: 0,
  source: {
    type: Date,
    format: 'l' // 使用manba日期格式化, "l": "YYYY-MM-DD",
  },
  description: '',
  tags: [0],
  companyId: '',
  rate: {
    type: Number,
    default: 0.8 // 使用默认值，只对 String, Number, Date 类型的值有效。
  },
  salary: {
    type: Number,
    unit: Model.Q // 金额转换，此处单位为 千
  }
});

export { User };
