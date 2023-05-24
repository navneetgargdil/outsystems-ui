// eslint-disable-next-line @typescript-eslint/no-unused-vars
namespace OSFramework.OSUI.Feature.Balloon {
	/**
	 * Defines the interface for OutSystemsUI Balloon Pattern
	 */
	export interface IBalloon extends Feature.IFeature, Interface.IOpenable {
		setBalloonShape(shape?: GlobalEnum.ShapeTypes): void;
		setFloatingUIBehaviour(isUpdate?: boolean): void;
		updatePositionOption(position: GlobalEnum.FloatingPosition): void;
	}
}
