package dh.backend.mojarra_tours.enums;

public enum Destination {
    LA_MOJARRA("La Mojarra"),
    MOJARRA_SALVAJE("Mojarra Salvaje"),
    MACAGUATO("Macaguato"),
    LA_PENIA("La Peña"),
    CHICAMOCHA("Cañón del Chicamocha"),
    BARICHARA("Barichara"),
    MESA_DE_LOS_SANTOS("Mesa de los Santos");

    private final String fullName;

    Destination(String fullName) {
        this.fullName = fullName;
    }

    public String getFullName() {
        return fullName;
    }
}
