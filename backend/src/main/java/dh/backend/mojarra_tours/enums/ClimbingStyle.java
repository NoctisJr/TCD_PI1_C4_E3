package dh.backend.mojarra_tours.enums;

public enum ClimbingStyle {
    SPORT("Sport Climbing"),
    TRAD("Traditional Climbing"),
    BOULDER("Bouldering"),
    FERRATA("Via Ferrata"),
    TOP_ROPE("Top-Rope Climbing");

    private final String fullName;

    ClimbingStyle(String fullName) {
        this.fullName = fullName;
    }

    public String getFullName() {
        return fullName;
    }
}


