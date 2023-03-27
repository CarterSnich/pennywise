import { BlurView } from "expo-blur";
import { View, ScrollView, ImageBackground, Text, Image, Button } from "react-native";

import { appStyle, mainStyle } from "../styles/styles";

function MainScreen({ navigation }) {
	return (
		<ImageBackground
			source={require("./../assets/bg-pennywise.jpg")}
			style={[appStyle.background, mainStyle.container]}
		>
			<BlurView
				intensity={100}
				tint="light"
				style={appStyle.blur}
			>
				{/* top bar */}
				<View style={mainStyle.topBar}>
					<Image source={require("./../assets/favicon.png")} />
					<Text style={mainStyle.topBarText}>Hello!</Text>
				</View>

				{/* body */}
				<View style={mainStyle.body}>
					{/* balance preview */}
					<View style={mainStyle.balancePreview}>
						<Text>AVAILABLE BALANCE</Text>
						<View style={mainStyle.balancePreviewInner}>
							<Text style={mainStyle.balancePreviewInnerText}>P 3.00</Text>
							<Button title="+ Cash In" />
						</View>
					</View>

					{/* scrollable contents */}
					<ScrollView
						style={mainStyle.cardGroup}
						contentContainerStyle={mainStyle.cardGroupContainer}
						showsVerticalScrollIndicator={false}
					>
						<View style={mainStyle.card}>
							<Text style={mainStyle.cardText}>Budget tracking</Text>
						</View>
						<View style={mainStyle.card}>
							<Text style={mainStyle.cardText}>Expenses tracking</Text>
						</View>
						<View style={mainStyle.card}>
							<Text style={mainStyle.cardText}>Saving goals</Text>
						</View>
						<View style={mainStyle.card}>
							<Text style={mainStyle.cardText}>Bill reminders</Text>
						</View>
					</ScrollView>
				</View>
			</BlurView>
		</ImageBackground>
	);
}
export default MainScreen;
