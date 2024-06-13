(function() {var type_impls = {
"alloy_provider":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-PollerBuilder%3CConn,+Params,+Resp%3E\" class=\"impl\"><a href=\"#impl-Debug-for-PollerBuilder%3CConn,+Params,+Resp%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Conn, Params, Resp&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for PollerBuilder&lt;Conn, Params, Resp&gt;<div class=\"where\">where\n    Conn: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    Params: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    Resp: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","alloy_provider::provider::trait::FilterPollerBuilder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PollerBuilder%3CConn,+Params,+Resp%3E\" class=\"impl\"><a href=\"#impl-PollerBuilder%3CConn,+Params,+Resp%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Conn, Params, Resp&gt; PollerBuilder&lt;Conn, Params, Resp&gt;<div class=\"where\">where\n    Conn: Transport + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Params: RpcParam + 'static,\n    Resp: RpcReturn + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">new</a>(\n    client: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/sync/struct.Weak.html\" title=\"struct alloc::sync::Weak\">Weak</a>&lt;RpcClientInner&lt;Conn&gt;&gt;,\n    method: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'static, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;&gt;,\n    params: Params,\n) -&gt; PollerBuilder&lt;Conn, Params, Resp&gt;</h4></section></summary><div class=\"docblock\"><p>Create a new poller task.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.channel_size\" class=\"method\"><h4 class=\"code-header\">pub const fn <a class=\"fn\">channel_size</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class=\"docblock\"><p>Returns the channel size for the poller task.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.set_channel_size\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">set_channel_size</a>(&amp;mut self, channel_size: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>)</h4></section></summary><div class=\"docblock\"><p>Sets the channel size for the poller task.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_channel_size\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">with_channel_size</a>(\n    self,\n    channel_size: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>,\n) -&gt; PollerBuilder&lt;Conn, Params, Resp&gt;</h4></section></summary><div class=\"docblock\"><p>Sets the channel size for the poller task.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.limit\" class=\"method\"><h4 class=\"code-header\">pub const fn <a class=\"fn\">limit</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class=\"docblock\"><p>Returns the limit on the number of successful polls.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.set_limit\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">set_limit</a>(&amp;mut self, limit: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;)</h4></section></summary><div class=\"docblock\"><p>Sets a limit on the number of successful polls.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_limit\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">with_limit</a>(\n    self,\n    limit: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;,\n) -&gt; PollerBuilder&lt;Conn, Params, Resp&gt;</h4></section></summary><div class=\"docblock\"><p>Sets a limit on the number of successful polls.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.poll_interval\" class=\"method\"><h4 class=\"code-header\">pub const fn <a class=\"fn\">poll_interval</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/time/struct.Duration.html\" title=\"struct core::time::Duration\">Duration</a></h4></section></summary><div class=\"docblock\"><p>Returns the duration between polls.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.set_poll_interval\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">set_poll_interval</a>(&amp;mut self, poll_interval: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/time/struct.Duration.html\" title=\"struct core::time::Duration\">Duration</a>)</h4></section></summary><div class=\"docblock\"><p>Sets the duration between polls.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_poll_interval\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">with_poll_interval</a>(\n    self,\n    poll_interval: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/time/struct.Duration.html\" title=\"struct core::time::Duration\">Duration</a>,\n) -&gt; PollerBuilder&lt;Conn, Params, Resp&gt;</h4></section></summary><div class=\"docblock\"><p>Sets the duration between polls.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.spawn\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">spawn</a>(self) -&gt; PollChannel&lt;Resp&gt;</h4></section></summary><div class=\"docblock\"><p>Starts the poller in a new Tokio task, returning a channel to receive the responses on.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_stream\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">into_stream</a>(self) -&gt; impl Stream&lt;Item = Resp&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a></h4></section></summary><div class=\"docblock\"><p>Starts the poller and returns the stream of responses.</p>\n<p>Note that this is currently equivalent to <code>self.spawn().into_stream()</code>, but this may change\nin the future.</p>\n</div></details></div></details>",0,"alloy_provider::provider::trait::FilterPollerBuilder"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()