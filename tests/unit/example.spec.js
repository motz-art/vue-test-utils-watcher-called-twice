/* eslint no-console: "off" */
import { expect } from "chai";
import { mount } from "@vue/test-utils";

const Component = {
  template: "<p>{{ innerValue }}</p>",
  props: {
    value: String
  },
  data() {
    return {
      delayedValue: null,
      innerValue: null
    };
  },
  watch: {
    value: {
      immediate: true,
      async handler(val) {
        console.log(val);
        this.delayedValue = val;
        let text = "";
        if (val) {
          text = await Promise.resolve(val);
        }

        if (this.delayedValue == val) {
          this.innerValue = text;
        }
      }
    }
  }
};

it.only("should update inner value", async () => {
  const wrapper = mount(Component);
  await wait(100);
  console.log('setting props');
  wrapper.setProps({ value: "good" });
  console.log('props are set.');
  await wait(100);
  expect(wrapper.vm.innerValue).be.equal("good");
});

function wait(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
}
