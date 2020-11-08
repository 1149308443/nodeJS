module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'eslint:recommended', 'plugin:@typescript-eslint/eslint-recommended', 'plugin:@typescript-eslint/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  rules: {

    /**
     * Off 或 0：表示不验证规则。
     * warn 或 1：表示验证规则，当不满足时，给警告
     * error 或 2 ：表示验证规则，不满足时报错
     */

    // ////////////
    // 代码风格及规范限制.相关 start //
    // ////////////
    quotes: [2, 'single'], // 单引号
    'no-console': 0, // 不禁用console
    'no-debugger': 2, // 禁用debugger
    semi: [2, 'always'], // 强制使用分号
    'no-control-regex': 2, // 禁止在正则表达式中使用控制字符 ：new RegExp("\x1f")
    'linebreak-style': ['error', 'unix'], // 此规则强制执行统一的行结尾，而不受操作系统，VCS 或整个代码库中使用的编辑器的影响
    indent: ['error', 2, { SwitchCase: 1 }], // 空格2个
    'array-bracket-spacing': 2, // 指定数组的元素之间要以空格隔开(,后面)
    'brace-style': [2, '1tbs', { allowSingleLine: true }], // If while function 后面的{必须与if在同一行，java风格。
    'no-irregular-whitespace': 2, // 不规则的空白不允许
    'no-trailing-spaces': 2, // 一行结束后面有空格就发出警告
    'eol-last': 2, // 文件以单一的换行符结束
    'no-unused-vars': [
      2,
      {
        vars: 'all',
        args: 'none'
      }
    ], // 不能有声明后未被使用的变量或参数
    'no-underscore-dangle': 2, // 标识符不能以_开头或结尾
    'no-alert': 2, // 禁止使用alert confirm prompt
    'no-lone-blocks': 2, // 禁止不必要的嵌套块
    'no-class-assign': 2, // 禁止给类赋值
    'no-floating-decimal': 2, // 禁止数字字面量中使用前导和末尾小数点
    'no-loop-func': 2, // 禁止在循环中出现 function 声明和表达式
    'no-cond-assign': 2, // 禁止在条件表达式中使用赋值语句
    'no-delete-var': 2, // 不能对var声明的变量使用delete操作符
    'no-dupe-keys': 2, // 在创建对象字面量时不允许键重复
    'no-duplicate-case': 2, // Switch中的case标签不能重复
    'no-dupe-args': 2, // 函数参数不能重复
    'no-empty': 2, // 块语句中的内容不能为空
    'no-func-assign': 2, // 禁止重复的函数声明
    'no-invalid-this': 2, // 禁止无效的this，只能用在构造器，类，对象字面量
    'no-redeclare': 2, // 禁止重复声明变量
    'no-spaced-func': 2, // 函数调用时 函数名与()之间不能有空格
    // 'no-undef': 2, // 不能有未定义的变量
    'no-use-before-define': 2, // 未定义前不能使用
    camelcase: 2, // 强制驼峰法命名
    'accessor-pairs': 'error', // 定义对象的set存取器属性时，强制定义get
    'array-bracket-newline': ['error', 'consistent'], // 要求每对括号一致使用换行符。如果其中一个支架在其内部有换行符，而另一个支架没有，则报告错误。
    'array-callback-return': 'error', // Return规则强制在数组方法的回调中使用语句
    'array-element-newline': ['error', { multiline: true }], // 该规则强制数组元素之间的换行符。使用多行强制换行，单行不换行
    'block-scoped-var': 'error', // 变量在定义块的外部使用时，规则会生成警告。这模拟了C风格的块范围。
    'block-spacing': 'error', // 规则在打开的块令牌内和同一行上的下一个令牌内强制执行一致的间距。此规则还会在同一行中的关闭块标记和以前的标记内强制实施一致的间距。
    // 'callback-return': 'error', // 规则旨在确保在主功能块外部使用的回调始终是在return语句之前的部分或之前
    'capitalized-comments': 'off', // 此规则在注释开始时将需要非小写字母
    'comma-dangle': ['error', 'never'], // Always-multiline：多行模式必须带逗号，单行模式不能带逗号
    // 控制逗号前后的空格
    'comma-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ],
    'comma-style': [2, 'last'], // 控制逗号在行尾出现还是在行首出现
    complexity: [2, 12], // 圈复杂度
    'computed-property-spacing': [2, 'never'], // 以方括号取对象属性时，[ 后面和 ] 前面是否需要空格, 可选参数 never, always
    'consistent-return': 0, // 强制方法必须返回值，TypeScript强类型，不配置
    'consistent-this': 2,
    curly: [2, 'all'], // If else while for do后面的代码块是否需要{ }包围
    'default-case': 2, // Switch语句强制default分支，也可添加 // no default 注释取消此次警告
    'dot-location': [2, 'property'], // 强制object.key 中 . 的位置，
    // 强制使用.号取属性
    'dot-notation': [
      2,
      {
        allowKeywords: true
      }
    ],
    eqeqeq: [2, 'allow-null'], // 使用 === 替代 ==
    'func-names': 0, // 方法表达式是否需要命名
    'func-style': 0, // 方法定义风格
    // 该规则旨在强化*发生器功能的间距。
    'generator-star-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ],
    'guard-for-in': 0, // 此规则旨在防止使用for in循环而不过滤循环中的结果时可能出现的意外行为
    'global-require': 2, // 此规则要求所有调用require()都位于模块的顶层
    'handle-callback-err': [2, '^(err|error)$'], // 这个规则期望当你在 Node.js 中使用回调模式时，你会处理这个错误
    // 此规则强制在对象字面量属性中的键和值之间保持一致的间距
    'key-spacing': [
      2,
      {
        beforeColon: false,
        afterColon: true
      }
    ],
    'lines-around-comment': 2, // 此规则在评论之前和/或之后需要空行
    'max-nested-callbacks': ['error', 3], // 此规则强制执行最大深度，可以嵌套回调以提高代码清晰度
    // 此规则要求构造函数名以大写字母开头。某些内置标识符可免除此规则.
    'new-cap': [
      2,
      {
        newIsCap: true,
        capIsNew: false
      }
    ],
    'no-catch-shadow': 2,
    'no-constant-condition': 2,
    'no-continue': 2,
    'no-div-regex': 2,
    'no-else-return': 2,
    'no-empty-character-class': 2,
    'no-eq-null': 2,
    'no-eval': 2,
    'no-ex-assign': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-parens': 2,
    'no-extra-semi': 2,
    'no-fallthrough': 2,
    'no-implied-eval': 2,
    'no-inline-comments': 0, // 不允许与代码在同一行上发表评论(注释和代码不能再同一行)
    'no-inner-declarations': [2, 'functions'],
    'no-invalid-regexp': 2,
    'no-iterator': 2,
    'no-label-var': 2,
    'no-labels': 2,
    'no-lonely-if': 2,
    'no-mixed-requires': 2,
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-multiple-empty-lines': [
      2,
      {
        max: 1
      }
    ],
    'no-native-reassign': 2,
    'no-negated-in-lhs': 2,
    // 规则不允许嵌套的三元表达式。
    'no-nested-ternary': 2,
    'no-new': 2,
    'no-new-func': 2,
    'no-new-object': 2,
    'no-new-require': 2,
    'no-new-symbol': 2,
    'no-new-wrappers': 2,
    'no-obj-calls': 2, // 这个规则不允许调用Math，JSON和Reflect对象作为功能
    'no-octal': 2, // 不允许使用八进制文字
    'no-octal-escape': 2, // 不允许字符串文字中的八进制转义序列
    'no-param-reassign': 2, // 防止由功能参数的修改或重新分配引起的意外行为
    'no-path-concat': 2, // 防止 Node.js 中的目录路径字符串连接
    // 'no-process-env': 0, // 阻止使用process.env以避免全局依赖
    'no-process-exit': 0, // 防止process.exit()在 Node.js JavaScript 中使用
    'no-proto': 2,
    'no-regex-spaces': 2, // 规则在正则表达式文字中不允许有多个空格
    'no-restricted-modules': 0, // 允许你指定你不想在你的应用程序中使用的模块
    'no-return-assign': 2, // 消除return陈述中的任务
    'no-script-url': 2,
    'no-self-compare': 2, // 引发这个错误是为了强调一个潜在的混淆和可能没有意义的代码片断
    'no-sequences': 2, // 禁止使用逗号运算符
    'no-shadow': 2, // 该规则旨在消除阴影变量声明
    'no-shadow-restricted-names': 2,
    'no-sparse-arrays': 2, // 不允许稀疏数组文字
    'no-sync': 0, // 防止在 Node.js 中调用同步方法
    'no-ternary': 0, // 不允许三元运算符
    'no-throw-literal': 2, // 不允许抛出不可能是Error对象的文字和其他表达式来抛出异常时保持一致性
    // 'no-undef-init': 2, // 消除初始化为的变量声明undefined
    // 'no-undefined': 2, // 消除使用undefined，并因此在使用时发出警告
    'no-unexpected-multiline': 2, // 不允许混淆多行表达式，换行符看起来像是结束语句，但不是
    'no-unneeded-ternary': 2, // 当存在更简单的选择时，此规则不允许三元运算符
    'no-unused-expressions': 2,
    'no-void': 2, // 消除无效操作符的使用
    'no-warning-comments': 2, // 报告包含其配置中指定的任何预定义术语的注释
    'no-with': 2, // 不允许with声明
    'no-tabs': 2, // 禁止缩进错误
    'no-restricted-syntax': 2, // 允许使用 for in
    'object-curly-spacing': ['error', 'always'], // 此规则在对象文字的大括号内执行一致的间距，解构赋值和导入/导出说明符。
    //
    'one-var': [
      2,
      {
        initialized: 'never'
      }
    ],
    'operator-assignment': ['error', 'always'], // 此规则要求或不允许赋值运算符速记

    // 此规则为运营商实施一致的换行样式。
    'operator-linebreak': [
      2,
      'after',
      {
        overrides: {
          '?': 'before',
          ':': 'before'
        }
      }
    ],

    //
    'padded-blocks': 0,
    'prefer-const': 2, // 此规则旨在标记使用let关键字声明的变量，但在初始分配后从未重新分配变量
    'quote-props': ['error', 'as-needed'], // 此规则需要引用对象字面值属性名称。
    radix: 2, // 此规则旨在防止意外地将字符串转换为与预期不同的基数，或者如果仅锁定现代环境，则会阻止冗余10基数。
    'semi-spacing': 2, // 此规则旨在强制分号间隔。
    'sort-vars': 0, // 该规则检查所有变量声明块并验证所有变量是按字母顺序排序的。
    'space-before-blocks': [2, 'always'], // 此规则将强化块之前的间距一致性
    'space-in-parens': [2, 'never'], // 此规则将强制直接在括号内进行间隔的一致性，即禁止或要求右侧(和左侧有一个或多个空格)。无论如何，()仍然会被允许。
    'space-infix-ops': 2, // 这条规则旨在确保中缀操作员周围有空间。
    // 该规则强化了words一元运算符之后和一元运算符之后的空间的一致性nonwords。
    'space-unary-ops': [
      2,
      {
        words: true,
        nonwords: false
      }
    ],
    // 注释开始后，此规则将强制间距的一致性//或/*。它还为各种文档样式提供了一些例外。
    'spaced-comment': [
      2,
      'always',
      {
        markers: ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!']
      }
    ],
    // 严格模式
    strict: ['error', 'never'],

    'use-isnan': 2, // 这条规则不允许比较'NaN'。
    'valid-jsdoc': 2, // 此规则强制执行有效且一致的JSDoc注释。
    'valid-typeof': 2, // 此规则强制将typeof表达式与有效的字符串文字进行比较。
    'vars-on-top': 2, // 该规则旨在将所有变量声明保留在前面的一系列声明中。允许多个声明有助于提高可维护性，因此被允许。

    // 该规则要求所有立即调用的函数表达式都包含在圆括号中。
    'wrap-iife': [2, 'inside', { functionPrototypeMethods: true }],
    'wrap-regex': 0, // 这用于消除斜杠运算符的歧义，并有助于使代码更具可读性。
    yoda: [2, 'never'], // 这条规则旨在强制执行一种将变量与文字值进行比较的一致条件样式。
    // ////////////
    // 代码风格及规范限制.相关 end //
    // ////////////

    // ////////////
    // ES6.相关  start//
    // ////////////
    'arrow-body-style': 2, // 要求箭头函数体使用大括号
    'arrow-parens': 2, // 要求箭头函数的参数使用圆括号
    'arrow-spacing': [2, { before: true, after: true }], // 规则在箭头函数的箭头（=>）之前/之后标准化间距样式
    'constructor-super': 2, // 强制在子类构造函数中用super()调用父类构造函数，TypeScrip的编译器也会提示
    'no-const-assign': 2, // 禁止修改 const 声明的变量
    'no-dupe-class-members': 2, // 禁止类成员中出现重复的名称
    'no-this-before-super': 2, // 禁止在构造函数中，在调用 super() 之前使用 this 或 super
    'no-var': 2, // 要求使用 let 或 const 而不是 var
    'object-shorthand': 2, // 要求或禁止对象字面量中方法和属性使用简写语法
    'prefer-template': 2, // 要求使用模板字面量而非字符串连接
    'new-parens': 2, // 此规则在使用new关键字调用不带参数的构造函数时需要括号，以便提高代码清晰度
    'newline-after-var': 2, // 此规则强制执行，其中空线都需要或禁止后一种编码风格var，let或const语句来实现整个项目一致的编码风格。
    'switch-colon-spacing': ['error', { after: true, before: false }],
    // ////////////
    // ES6.相关  end//
    // ////////////

    // ////////////
    // Typescript.相关  start//
    // ////////////

    // 只要求自定义的方法设置返回类型
    '@typescript-eslint/explicit-function-return-type': [
      2,
      {
        allowExpressions: true
      }
    ],
    '@typescript-eslint/no-explicit-any': 1, // Any类型时的警告报错
    '@typescript-eslint/interface-name-prefix': 0, // 关闭接口不能以 I 为前缀
    '@typescript-eslint/ban-types': 0 // 接口不能定义object类型

    // ////////////
    // Typescript.相关  end//
    // ////////////
  }
};
