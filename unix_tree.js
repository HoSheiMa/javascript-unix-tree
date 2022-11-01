let a = "├──";
let b = "│";
let c = "└──";

class output {
  constructor(text) {
    console.log(text);
  }
}

class unix {
  constructor(
    data,
    configs = {
      show_array_index: false,
      show_object_keys: false,
    }
  ) {
    this.data = data;
    this.configs = configs;
    this.output = "";
    this.convertor();
  }
  border(deep = 0, is_last = false) {
    let output = "";
    let tab = "   ";
    for (let i = 0; i < deep; i++) {
      output += b + tab;
    }
    return output + (is_last ? c : a);
  }
  is_object(obj) {
    return obj instanceof Object;
  }
  add_array_output(deep, index) {
    this.output +=
      this.border(deep) + " " + "Array" + (index ? `: ${index}` : "") + "\n";
  }
  add_object_output(deep, key = null) {
    this.output +=
      this.border(deep) + " " + "Object" + (key ? `: ${key}` : "") + "\n";
  }

  add_normal_output(deep, data, index) {
    let el = data[index];
    if (Array.isArray(data)) {
      if (this.configs.show_array_index) this.add_array_output(deep, index);
      this.output +=
        this.border(
          deep + (this.configs.show_array_index ? 1 : 0),
          this.configs.show_array_index ? true : index == data.length - 1
        ) +
        " " +
        el +
        "\n";
    } else if (this.is_object(data)) {
      if (this.configs.show_object_keys) this.add_object_output(deep, index);
      this.output +=
        this.border(
          deep + (this.configs.show_object_keys ? 1 : 0),
          this.configs.show_object_keys
            ? true
            : Object.keys(data).indexOf(index) == Object.keys(data).length - 1
        ) +
        " " +
        el +
        "\n";
    } else {
      console.log(index, data.length, el);
      this.output +=
        this.border(deep, index == data.length - 1) + " " + el + "\n";
    }
  }
  convertor(data = this.data, deep = 0) {
    for (let index in data) {
      let el = data[index];
      if (Array.isArray(el)) {
        this.add_array_output(deep);
        this.convertor(el, deep + 1);
      } else if (this.is_object(el)) {
        this.add_object_output(deep);
        this.convertor(el, deep + 1);
      } else {
        this.add_normal_output(deep, data, index);
      }
    }
  }
}

// convert array to unix tree

let array = [
  1,
  2,
  [3, 4, 5],
  {
    name: "Qandil",
    links: [
      "https://www.freelancer.com/u/wadielnatrontv",
      "https://www.facebook.com/qandilabdel.fadilawyan/",
    ],
    ex: [1, 2, 3, { say: "hello" }],
  },
];

new output(
  new unix(array, {
    show_array_index: true,
    show_object_keys: true,
  }).output
);
