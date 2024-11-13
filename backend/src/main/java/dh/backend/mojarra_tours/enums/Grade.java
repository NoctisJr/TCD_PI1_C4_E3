package dh.backend.mojarra_tours.enums;

public enum Grade {
    // Enum constants with corresponding levels
    YDS_5(Level.NOVICE),
    YDS_5_1(Level.NOVICE),
    YDS_5_2(Level.NOVICE),
    YDS_5_3(Level.NOVICE),
    YDS_5_4(Level.NOVICE),
    YDS_5_5(Level.BEGINNER),
    YDS_5_6(Level.BEGINNER),
    YDS_5_7(Level.BEGINNER),
    YDS_5_8(Level.INTERMEDIATE),
    YDS_5_9(Level.INTERMEDIATE),
    YDS_5_10A(Level.INTERMEDIATE),
    YDS_5_10B(Level.INTERMEDIATE),
    YDS_5_10C(Level.INTERMEDIATE),
    YDS_5_10D(Level.INTERMEDIATE),
    YDS_5_11A(Level.ADVANCED),
    YDS_5_11B(Level.ADVANCED),
    YDS_5_11C(Level.ADVANCED),
    YDS_5_11D(Level.ADVANCED),
    YDS_5_12A(Level.EXPERT),
    YDS_5_12B(Level.EXPERT),
    YDS_5_12C(Level.EXPERT),
    YDS_5_12D(Level.EXPERT),
    YDS_5_13A(Level.SUPER_EXPERT),
    YDS_5_13B(Level.SUPER_EXPERT),
    YDS_5_13C(Level.SUPER_EXPERT),
    YDS_5_13D(Level.ELITE),
    YDS_5_14A(Level.ELITE),
    YDS_5_14B(Level.ELITE),
    YDS_5_14C(Level.ELITE),
    YDS_5_14D(Level.SUPER_ELITE),
    YDS_5_15A(Level.SUPER_ELITE),
    YDS_5_15B(Level.SUPER_ELITE),
    YDS_5_15C(Level.SUPER_ELITE),
    YDS_5_15D(Level.ALIENS);

    // Field to hold the level
    private final Level level;

    // Constructor
    Grade(Level level) {
        this.level = level;
    }

    // Getter for the level
    public Level getLevel() {
        return level;
    }
}
