import { StyleSheet } from "react-native";

export const appStyle = StyleSheet.create({
	background: {
		flex: 1,
	},

	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
		gap: 10,
	},

	image: {
		maxHeight: 128,
		maxWidth: 128,
		marginBottom: 120,
	},

	blur: {
		flex: 1,
		width: "100%",
	},

	h1: {
		fontSize: 32,
		marginBottom: 20,
	},

	inputGroup: {
		flexGrow: 0,
		flexShrink: 0,
		flexDirection: "row",
		gap: 20,
		justifyContent: "space-around",
		alignItems: "center",
		padding: 6,
	},

	text: {
		minWidth: 80,
	},

	textInput: {
		flexGrow: 0,
		flexShrink: 0,
		paddingHorizontal: 10,
		paddingVertical: 6,
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 5,
		backgroundColor: "#fff",
		minWidth: 200,
	},

	button: {
		marginTop: 20,
		width: 200,
	},

	signUp: {
		flexDirection: "row",
		marginTop: 80,
	},
});

export const splashStyle = StyleSheet.create({
	container: {
		flex: 1,
		gap: 6,
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
	},

	image: {
		maxHeight: 128,
		maxWidth: 128,
		marginBottom: 120,
	},

	progress: {
		color: "red",
		height: 40,
		width: 200,
	},
});

// page style
export const mainStyle = StyleSheet.create({
	container: {
		flexGrow: 1,
		flexDirection: "column",
	},

	topBar: {
		flexDirection: "row",
		gap: 20,
		alignItems: "center",
		width: "100%",
		paddingVertical: 10,
		paddingHorizontal: 20,
	},

	topBarText: {
		fontSize: 24,
	},

	body: {
		flex: 1,
		flexGrow: 1,
		padding: 10,
		gap: 10,
	},

	balancePreview: {
		flexDirection: "column",
		gap: 10,
		padding: 10,
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 5,
		backgroundColor: "#fff",
	},

	balancePreviewInner: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},

	balancePreviewInnerText: {
		fontSize: 24,
	},

	cardGroup: {},

	cardGroupContainer: {
		flexDirection: "column",
		gap: 10,
	},

	card: {
		flexDirection: "column",
		alignItems: "center",
		padding: 10,
		height: 400,

		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 32,
		backgroundColor: "#fff",
	},

	cardText: {
		fontSize: 32,
	},
});
