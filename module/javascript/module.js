forge['geolocation'] = {
	'getCurrentPosition': function (one, two, three) {
		if (typeof(one) === "object") {
			var options = one,
				success = two,
				error = three;
		} else {
			var success = one,
				error = two,
				options = three;
		}
		if (forge.is.ios()) {
			forge.internal.call("geolocation.getCurrentPosition", options, success, error);
		} else if (navigator && "geolocation" in navigator) {
			return navigator.geolocation.getCurrentPosition(success, error, options);
		} else {
			error && error({
				message: "geolocation not supported",
				type: "UNAVAILABLE"
			});
		}
	}
};
