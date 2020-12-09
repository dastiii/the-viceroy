<script>
export default {
  props: {
    defaultOpen: {
      type: Boolean,
      default: false,
    }
  },
  created() {
    this.isOpen = this.defaultOpen;
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    }
  },
  render() {
    return this.$scopedSlots.default({
      isOpen: this.isOpen,
      toggle: this.toggle
    });
  }
};
</script>