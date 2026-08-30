export const DeterministicRuntimeFlagManager = {
  flags: {},

  set(name, value) {
    this.flags[name] = Boolean(value);
    return { name, value: this.flags[name], timestamp: Date.now() };
  },

  get(name) {
    return this.flags[name] === true;
  },

  all() {
    const ordered = {};
    const keys = Object.keys(this.flags).sort();
    for (const k of keys) {
      ordered[k] = this.flags[k];
    }
    return ordered;
  }
};
