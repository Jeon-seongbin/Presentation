public class Soccer implements Comparable<Soccer> {
    Soccer() {
    }

    Soccer(int age, String name) {
        this.age = age;
        this.name = name;
    }

    private int age;
    private String name;

    public int getAge() {
        return this.age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public int compareTo(Soccer p1) {
        if (this.age > p1.age) {
            return 1;
        } else if (this.age == p1.age) {
            return 0;
        }
        return -1;

    }
}