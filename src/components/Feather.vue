<script lang="ts">
import feather from 'feather-icons';
import { computed, h } from 'vue';

export default {
  name: 'Feather',
  functional: true,
  props: {
    fill: {
      type: String,
      default: 'none',
    },
    size: {
      type: [Number, String],
      default: 24,
    },
    stroke: {
      type: String,
      default: 'currentColor',
    },
    strokeLinecap: {
      type: String,
      default: 'round',
    },
    strokeLinejoin: {
      type: String,
      default: 'round',
    },
    strokeWidth: {
      type: [Number, String],
      default: 2,
    },
    tag: {
      type: String,
      default: 'i',
    },
    type: {
      type: String,
      required: true,
    },
  },

  setup(props, { attrs }) {
    const icon = computed(() => feather.icons[props.type]);

    return () => h(
      props.tag,
      {
        'data-name': props.type,
        'data-tags': icon.value ? icon.value.tags : '',
        'data-type': props.type,
        class: {
          [`feather--${props.type}`]: props.type,
        },
        ...attrs,
      },
      [
        icon.value
          ? h('svg', {
            ...icon.value.attrs,
            fill: props.fill,
            height: props.size,
            stroke: props.stroke,
            'stroke-linecap': props.strokeLinecap,
            'stroke-linejoin': props.strokeLinejoin,
            'stroke-width': props.strokeWidth,
            width: props.size,
            class: [icon.value.attrs.class, 'feather__content'],
            innerHTML: icon.value.contents,
          })
          : '',
      ],
    );
  },
};
</script>
