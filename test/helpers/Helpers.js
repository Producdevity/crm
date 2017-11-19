export class Helpers {

  constructor(wrapper, expect) {
    this.wrapper = wrapper
    this.expect  = expect
  }

  see(text, selector) {
    let wrap = selector ? this.wrapper.find(selector) : this.wrapper
    this.expect(wrap.html()).toContain(text)
  }

  type(text, selector) {
    let node           = this.find(selector)
    node.element.value = text
    node.trigger('input')
  }

  click(selector) {
    this.find(selector).trigger('click')
  }

  inputValueIs(text, selector) {
    this.expect(this.find(selector).element.value).toBe(text)
  }

  inputValueIsNot(text, selector) {
    this.expect(this.find(selector).element.value).not.toBe(text)
  }

  domHas(selector) {
    this.expect(this.wrapper.contains(selector)).toBe(true)
  }

  wrapperHasClass(className) {
    this.expect(this.wrapper.hasClass(className)).toBe(true)
  }

  wrapperHasId(id) {
    this.expect(this.wrapper.hasAttribute('id', id)).toBe(true)
  }

  domHasNot(selector) {
    this.expect(this.wrapper.contains(selector)).toBe(false)
  }

  find(selector) {
    return this.wrapper.find(selector)
  }

}
