<script>
hljs.registerLanguage('pseudocode', function(hljs) {
  return {
    contains: [
      {
        className: 'keyword',
        begin: '\\b(if|then|else|for|while|return|do|to)\\b',
      },
      {
        className: 'number',
        begin: '\\b\\d+\\b',
      },
      // 추가 규칙을 여기에 정의할 수 있습니다.
    ]
  };
});
</script>
